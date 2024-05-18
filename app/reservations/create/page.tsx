"use client";

import { Routes } from "@/components/nav-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { formatCurrency } from "@/lib/currency-utils";
import { get, post } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { compareAsc, differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { DatePickerForm } from "../../../components/ui/date-picker";
import { CreateStayRequest, StayResponse } from "../../api/stays/route";
import { Room, StayStatus } from "../../models/models";
import { formSchema as FormSchema, GuestForm, GuestFormValues } from "./guest-form";
import RateOverrideForm from "./rate-override";
import RateToggle from "./rate-toggle";
import RoomSelector from "./room-selection";
import SaveToolbar from "./save-button";

export default function CreateReservation() {
	const { toast } = useToast();
	const router = useRouter();

	const [unitRate, setUnitRate] = useState(0);
	const [isRateTypeWeekly, setisRateTypeWeekly] = useState(false);
	const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
	const [duration, setDuration] = useState(0);
	const [selectedRoom, setSelectedRoom] = useState<Room | undefined>();
	const [totalAmount, setTotalAmount] = useState(0);
	const [isGuestValid, setIsGuestValid] = useState(false);
	const [guestData, setGuestData] = useState<GuestFormValues>({
		firstName: "",
		lastName: "",
		address: "",
		phoneNumber: "",
		dlNumber: "",
		comments: "",
	});

	const [isLoading, setIsLoading] = useState(true);
	const [currentStays, setCurrentStays] = useState<StayResponse[]>([]);

	const handleDateChange = (value: DateRange | undefined) => {
		setDateRange(value);
		if (value?.from && value?.to) {
			if (value?.from && value?.to) {
				const days = Math.abs(differenceInDays(value.from, value.to));
				const weeks = Math.ceil(days! / 7);
				isRateTypeWeekly ? setDuration(weeks ?? 0) : setDuration(days ?? 0);
			} else {
				setDuration(0); // Reset duration if date range is incomplete
			}
		} else {
			setDuration(0); // Reset duration if date range is incomplete
		}
	};

	const handleRateChange = (value: number) => {
		setUnitRate(value);
	};

	const handleRoomChange = (value: Room) => {
		setSelectedRoom(value);
		setUnitRate(value.roomRate);
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

	const createReservation = () => {
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
		console.log(request);

		post("/stays", request)
			.then((x) => {
				toast({
					variant: "success",
					title: "Reservation created successfully",
					description: `Reservation Status: ${request.stayStatus}`,
				});
				router.push(Routes.Reservations);
			})
			.catch((err) => {
				console.warn(err);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: "There was a problem when creating reservation",
				});
			});
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

	const fetchAllRooms = async (page: number, pageSize: number) => {
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
	};

	useEffect(() => {
		fetchAllRooms(pagination.currentPage, pagination.pageSize);
		fetchInHouseStays();
	}, []);

	function onRateTypeToggle(rateType: string): void {
		const isWeekly = rateType === "weeklyRate";
		setisRateTypeWeekly(isWeekly);

		if (dateRange?.from && dateRange?.to) {
			const days = Math.abs(differenceInDays(dateRange.from, dateRange.to));
			const weeks = Math.ceil(days! / 7);
			isWeekly ? setDuration(weeks ?? 0) : setDuration(days ?? 0);
		} else {
			setDuration(0); // Reset duration if date range is incomplete
		}
	}

	return (
		<div className="flex w-full flex-col">
			<div>
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					<div className="mx-auto grid max-w-[70rem] flex-1 auto-rows-max gap-4">
						<div className="flex items-center gap-4">
							<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Create Reservation</h1>
							<div className="hidden items-center gap-2 md:ml-auto md:flex">
								<SaveToolbar onSave={createReservation} buttonDisabled={!dateRange || !isGuestValid || !selectedRoom || unitRate < 1} />
							</div>
						</div>
						<div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-4 lg:gap-8">
							<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
								<Card x-chunk="dashboard-07-chunk-0">
									<CardHeader>
										<CardTitle>Guest Information</CardTitle>
									</CardHeader>
									<CardContent>
										<GuestForm onChange={handleGuestChange} guestData={guestData} />
									</CardContent>
								</Card>
							</div>
							<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
								<RoomSelector occupiedRooms={currentStays.map((s) => s.room)} allRooms={allRooms} onValueChange={handleRoomChange} isLoading={isLoading}></RoomSelector>
								<Card x-chunk="dashboard-07-chunk-5">
									<CardHeader>
										<CardTitle>Stay summary</CardTitle>
									</CardHeader>
									<CardContent>
										<DatePickerForm onValueChange={handleDateChange}></DatePickerForm>
										<RateToggle onToggle={onRateTypeToggle} />
										<RateOverrideForm defaultRate={unitRate} onValueChange={handleRateChange} />
										<CardTitle className="mt-6">
											Amount Due: {formatCurrency(unitRate)} x {duration} {isRateTypeWeekly ? "week(s)" : "night(s)"} = {formatCurrency(totalAmount)}
										</CardTitle>
									</CardContent>
								</Card>
							</div>
						</div>
						<div className="flex items-center justify-center gap-2 md:hidden">
							<SaveToolbar onSave={createReservation} buttonDisabled={!dateRange || !isGuestValid || !selectedRoom || unitRate < 1} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
