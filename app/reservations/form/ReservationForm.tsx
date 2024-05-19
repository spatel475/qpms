"use client";

import { Routes } from "@/components/nav-links";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePickerForm } from "@/components/ui/date-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { formatCurrency } from "@/lib/currency-utils";
import { get, post, put } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { compareAsc, differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { CreateStayRequest, StayResponse } from "../../api/stays/route";
import { Room, Stay, StayStatus } from "../../models/models";
import { formSchema as FormSchema, GuestForm, GuestFormValues } from "./guest-form";
import RateOverrideForm from "./rate-override";
import RateToggle from "./rate-toggle";
import RoomSelector from "./room-selection";
import SaveToolbar from "./save-button";

interface CreateReservationProps {
	existingData?: Stay;
	isCopy: boolean;
}

const ReservationForm: React.FC<CreateReservationProps> = ({ existingData, isCopy }) => {
	const { toast } = useToast();
	const router = useRouter();

	const [unitRate, setUnitRate] = useState(0);
	const [isRateTypeWeekly, setIsRateTypeWeekly] = useState(false);
	const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
	const [duration, setDuration] = useState(0);
	const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);
	const [totalAmount, setTotalAmount] = useState(0);
	const [isGuestValid, setIsGuestValid] = useState(false);
	const [guestData, setGuestData] = useState<GuestFormValues>({
		id: "",
		firstName: "",
		lastName: "",
		address: "",
		phoneNumber: "",
		dlNumber: "",
		comments: "",
	});

	useEffect(() => {
		if (existingData) {
			setUnitRate(existingData.dailyRate || existingData.weeklyRate || 0);
			setIsRateTypeWeekly(!!existingData.weeklyRate);
			setDateRange(existingData.startDate && existingData.endDate ? { from: new Date(existingData.startDate), to: new Date(existingData.endDate) } : undefined);
			const isWeekly = !!existingData.weeklyRate;
			const diffInDays = Math.abs(differenceInDays(existingData.startDate, existingData.endDate));
			setDuration(isWeekly ? Math.ceil(diffInDays / 7) : diffInDays);
			setSelectedRoom(existingData.room);
			setTotalAmount(existingData.totalCharge || 0);
			setGuestData({
				id: existingData.guest?.id || "",
				firstName: existingData.guest?.firstName || "",
				lastName: existingData.guest?.lastName || "",
				address: existingData.guest?.address || "",
				phoneNumber: existingData.guest?.phoneNumber || "",
				dlNumber: existingData.guest?.dlNumber || "",
				comments: existingData.guest?.comments || "",
			});
		}
	}, [existingData]);

	const [isLoading, setIsLoading] = useState(true);
	const [currentStays, setCurrentStays] = useState<StayResponse[]>([]);

	const handleDateChange = (value: DateRange | undefined) => {
		setDateRange(value);
		if (value?.from && value?.to) {
			const days = Math.abs(differenceInDays(value.from, value.to));
			const weeks = Math.ceil(days / 7);
			isRateTypeWeekly ? setDuration(weeks) : setDuration(days);
		} else {
			setDuration(0);
		}
	};

	const handleRateChange = (value: number) => {
		setUnitRate(value);
	};

	const handleRoomChange = (value: Room) => {
		setSelectedRoom(value);
		isRateTypeWeekly ? setUnitRate(value.weeklyRoomRate) : setUnitRate(value.roomRate);
	};

	const handleGuestChange = (value: GuestFormValues) => {
		setGuestData(value);
	};

	useEffect(() => {
		const validationResult = FormSchema.safeParse(guestData);
		setIsGuestValid(validationResult.success);
	}, [guestData]);

	useEffect(() => {
		setTotalAmount(unitRate * duration);
	}, [unitRate, duration, isRateTypeWeekly]);

	const handleSaveReservation = async () => {
		if (!dateRange || !isGuestValid || !selectedRoom || unitRate < 1) {
			console.warn(dateRange, unitRate, selectedRoom, guestData);
			return;
		}

		const request: CreateStayRequest = {
			startDate: dateRange.from!.toDateString(),
			endDate: dateRange.to!.toDateString(),
			dailyRate: isRateTypeWeekly ? undefined : unitRate,
			weeklyRate: isRateTypeWeekly ? unitRate : undefined,
			totalCharge: totalAmount,
			amountDue: 0,
			amountPaid: totalAmount,
			paymentMode: "credit",
			numOfAdults: 2,
			numOfChildren: 0,
			stayStatus: compareAsc(new Date(), dateRange.from!) === -1 ? StayStatus.BOOKED : StayStatus.INHOUSE,
			guest: guestData,
			room: selectedRoom,
			extensions: isRateTypeWeekly ? duration : 0,
		};

		try {
			if (existingData && !isCopy) {
				console.log(request);
				// Editing an existing reservation
				await put(`/stays/${existingData.id}`, request);
				toast({
					variant: "success",
					title: "Reservation updated successfully",
					description: `Reservation Status: ${request.stayStatus}`,
				});
			} else {
				// Creating a new reservation
				await post("/stays", request);
				toast({
					variant: "success",
					title: "Reservation created successfully",
					description: `Reservation Status: ${request.stayStatus}`,
				});
			}
			router.push(Routes.Reservations);
		} catch (err) {
			console.warn(err);
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem when saving reservation",
			});
		}
	};

	const fetchInHouseStays = async () => {
		setIsLoading(true);

		try {
			const response = await get<StayResponse[]>("/stays", {
				queryParams: {
					stayStatus: StayStatus.INHOUSE,
				},
			});
			const fetchedData = response.data;
			setCurrentStays(fetchedData);
			setIsLoading(false);
		} catch (error) {
			console.warn("Error fetching stays:", error);
			setIsLoading(false);
		}
	};

	const [allRooms, setAllRooms] = useState<Room[]>([]);
	const [pagination, setPagination] = useState({ totalCount: 0, totalPages: 0, currentPage: 1, pageSize: 50 });

	const fetchAllRooms = useCallback(
		async (page: number, pageSize: number) => {
			setIsLoading(true);

			const cacheKey = `rooms-page-${page}-size-${pageSize}`;
			const cachedData = getCachedData(cacheKey);

			if (cachedData) {
				setAllRooms(cachedData.data);
				setPagination((prev) => ({
					...prev,
					totalCount: cachedData.totalCount,
					totalPages: cachedData.totalPages,
					pageSize: cachedData.pageSize,
					currentPage: page,
				}));
				setIsLoading(false);
			} else {
				try {
					const response = await get<Room[]>("/rooms", {
						queryParams: {
							page: pagination.currentPage.toString(),
							limit: pagination.pageSize.toString(),
						},
					});
					const fetchedData = response.data;
					const totalCount = parseInt(response.headers["x-total-count"], 10);
					const totalPages = Math.ceil(totalCount / pageSize);

					setAllRooms(fetchedData);
					setPagination((prev) => ({
						...prev,
						totalCount,
						totalPages,
						pageSize,
						currentPage: page,
					}));

					setCachedData(cacheKey, {
						data: fetchedData,
						totalCount,
						totalPages,
						pageSize,
					});

					setIsLoading(false);
				} catch (error) {
					console.error("Error fetching rooms:", error);
					setIsLoading(false);
				}
			}
		},
		[pagination.currentPage, pagination.pageSize]
	);

	useEffect(() => {
		fetchAllRooms(pagination.currentPage, pagination.pageSize);
		fetchInHouseStays();
	}, [fetchAllRooms]);

	const onRateTypeToggle = (rateType: string) => {
		const isWeekly = rateType === "weeklyRate";
		setIsRateTypeWeekly(isWeekly);
		isWeekly ? setUnitRate(selectedRoom?.weeklyRoomRate ?? 0) : setUnitRate(selectedRoom?.roomRate ?? 0);
		if (dateRange?.from && dateRange?.to) {
			const days = Math.abs(differenceInDays(dateRange.from, dateRange.to));
			const weeks = Math.ceil(days / 7);
			isWeekly ? setDuration(weeks) : setDuration(days);
		} else {
			setDuration(0);
		}
	};

	return (
		<div className="flex w-full flex-col">
			<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
				<div className="mx-auto grid max-w-[100%] flex-1 auto-rows-max gap-4">
					<div className="flex items-center gap-4">
						<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">{existingData && !isCopy ? "Edit Reservation" : "Create Reservation"}</h1>
						<div className="hidden items-center gap-2 md:ml-auto md:flex">
							<SaveToolbar onSave={handleSaveReservation} buttonDisabled={!dateRange || !isGuestValid || !selectedRoom || unitRate < 1} />
						</div>
					</div>
					<Tabs defaultValue="account" className="lg:min-w-[60vw] lg:max-w-min">
						<TabsList>
							<TabsTrigger value="account">Guest Information</TabsTrigger>
							<TabsTrigger value="password">Reservation Details</TabsTrigger>
						</TabsList>
						<TabsContent value="account" className="grid gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>Guest Search</CardTitle>
								</CardHeader>
								<CardContent>Feature In Progress. Coming Soon...</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Guest Information</CardTitle>
								</CardHeader>
								<CardContent>
									<GuestForm onChange={handleGuestChange} guestData={guestData} />
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="password" className="grid gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-2">
							<RoomSelector occupiedRooms={currentStays.map((s) => s.room)} allRooms={allRooms} defaultSelectedRoom={selectedRoom} onValueChange={handleRoomChange} isLoading={isLoading} />
							<Card>
								<CardHeader>
									<CardTitle>Stay summary</CardTitle>
								</CardHeader>
								<CardContent>
									<DatePickerForm onValueChange={handleDateChange} defaultDates={dateRange} />
									<RateToggle onToggle={onRateTypeToggle} defaultRateType={isRateTypeWeekly ? "weeklyRate" : "dailyRate"} />
									<RateOverrideForm defaultRate={unitRate} onValueChange={handleRateChange} />
								</CardContent>
								<CardFooter>
									<CardTitle className="mt-6">
										Amount Due: {formatCurrency(unitRate)} x {duration} {isRateTypeWeekly ? "week(s)" : "night(s)"} = {formatCurrency(totalAmount)}
									</CardTitle>
								</CardFooter>
							</Card>
						</TabsContent>
					</Tabs>
					<div className="flex items-center justify-center gap-2 md:hidden">
						<SaveToolbar onSave={handleSaveReservation} buttonDisabled={!dateRange || !isGuestValid || !selectedRoom || unitRate < 1} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default ReservationForm;
