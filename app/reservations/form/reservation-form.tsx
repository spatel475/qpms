"use client";

import { CreateStayRequest, StayResponse } from "@/app/api/models";
import { Routes } from "@/components/navbar/nav-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePickerForm } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { formatCurrency } from "@/lib/currency-utils";
import { get, post, put } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { compareAsc, differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Room, Stay, StayStatus } from "../../models/models";
import { formSchema as FormSchema, GuestForm, GuestFormValues } from "./guest-form";
import { PaymentDetails } from "./payement-details-form";
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

	// used when link should be maintained between new copied stay and original stay
	const [maintainLink, setMaintainLink] = useState(false);
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
	const [paymentDetails, setPaymentDetails] = useState<{
		amountDue?: number;
		amountPaid?: number;
		paymentMode?: string;
		numOfAdults?: number;
		numOfChildren?: number;
	}>();

	useEffect(() => {
		if (existingData) {
			const isWeekly = !!existingData.weeklyRate;
			setUnitRate(isWeekly ? existingData.room?.weeklyRoomRate ?? 0 : existingData.room?.roomRate ?? 0);
			setIsRateTypeWeekly(!!existingData.weeklyRate);
			setDateRange(existingData.startDate && existingData.endDate ? { from: new Date(existingData.startDate), to: new Date(existingData.endDate) } : undefined);
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
			setPaymentDetails({
				amountDue: existingData?.amountDue,
				amountPaid: existingData?.amountPaid,
				paymentMode: existingData?.paymentMode,
				numOfAdults: existingData.numOfAdults,
				numOfChildren: existingData.numOfChildren,
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

	const handlePaymentDetailChanges = (details: { amountDue: number; amountPaid: number; paymentMode: string; numOfAdults: number; numOfChildren: number }) => {
		setPaymentDetails(details);
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
			startDate: dateRange.from!,
			endDate: dateRange.to!,
			dailyRate: isRateTypeWeekly ? null : unitRate,
			weeklyRate: isRateTypeWeekly ? unitRate : null,
			totalCharge: totalAmount,
			amountDue: paymentDetails?.amountDue,
			amountPaid: paymentDetails?.amountPaid,
			paymentMode: paymentDetails?.paymentMode ?? "cash",
			numOfAdults: paymentDetails?.numOfAdults,
			numOfChildren: paymentDetails?.numOfChildren,
			stayStatus: compareAsc(new Date(), dateRange.from!) === -1 ? StayStatus.RESERVED : StayStatus.OCCUPIED,
			guest: guestData,
			room: selectedRoom,
			extensions: isRateTypeWeekly ? duration : 0,
			relatedStayId: maintainLink ? existingData?.id ?? undefined : undefined,
		};

		try {
			console.log("is_edit:", existingData && !isCopy, request);
			if (existingData && !isCopy) {
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

	const fetchOccupiedStays = async () => {
		setIsLoading(true);

		try {
			const response = await get<StayResponse[]>("/stays", {
				queryParams: {
					stayStatus: StayStatus.OCCUPIED,
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
		fetchOccupiedStays();
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
					<Tabs defaultValue="guest" className="lg:min-w-[60vw] lg:max-w-min">
						<TabsList>
							<TabsTrigger value="guest">Guest Information</TabsTrigger>
							<TabsTrigger value="stay">Reservation Details</TabsTrigger>
						</TabsList>
						<TabsContent value="guest" className="grid gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-2">
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
						<TabsContent value="stay" className="grid gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-2">
							<RoomSelector occupiedRooms={currentStays.map((s) => s.room)} allRooms={allRooms} defaultSelectedRoom={selectedRoom} onValueChange={handleRoomChange} isLoading={isLoading} />

							<Card>
								<CardHeader>
									<CardTitle>Stay summary</CardTitle>
								</CardHeader>
								<CardContent>
									<DateRangePickerForm onValueChange={handleDateChange} defaultDates={dateRange} />
									<RateToggle onToggle={onRateTypeToggle} defaultRateType={isRateTypeWeekly ? "weeklyRate" : "dailyRate"} />
									<RateOverrideForm defaultRate={unitRate} onValueChange={handleRateChange} />
									<CardTitle className="mt-4 text-md">
										{formatCurrency(unitRate)} x {duration} {isRateTypeWeekly ? "week(s)" : "night(s)"}:
									</CardTitle>
									<CardTitle className="mt-0 text-lg">Amount Due: {formatCurrency(totalAmount)}</CardTitle>

									<PaymentDetails amountDue={existingData?.amountDue} amountPaid={existingData?.amountPaid} numOfAdults={existingData?.numOfAdults} numOfChildren={existingData?.numOfChildren} paymentMode={existingData?.paymentMode} onChange={handlePaymentDetailChanges} />

									<Label className="flex items-center gap-1 mt-8">
										<Input type="checkbox" className="h-4 w-4" checked={maintainLink} onChange={() => setMaintainLink((prev) => !prev)} disabled={existingData && !isCopy} />
										Maintain link to related stay
									</Label>
								</CardContent>
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
