"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currency-utils";
import { get } from "@/lib/fetch";
import data from "@/lib/placeholder-data.json";
import { compareAsc, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { DatePickerForm } from "../../components/ui/date-picker";
import { CreateStayRequest, StayResponse } from "../api/stays/route";
import { Room, StayStatus } from "../models/models";
import { formSchema as FormSchema, GuestForm, GuestFormValues } from "./guest-form";
import RateOverrideForm from "./rate-override";
import RoomSelector from "./room-selection";
import SaveToolbar from "./save-button";

export default function CreateReservation() {
	const [dailyRate, setDailyRate] = useState(0);
	const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
	const [duration, setDuration] = useState(1);
	const [selectedRoom, setSelectedRoom] = useState<Room | undefined>();
	const [totalAmount, setTotalAmount] = useState(0);
	const [isGuestValid, setIsGuestValid] = useState(false);
	const [guestData, setGuestData] = useState<GuestFormValues>({
		// id: "",
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
			const intervalDuration = intervalToDuration({ start: value.from, end: value.to });
			setDuration(intervalDuration.days ?? 0); // Update duration state
		} else {
			setDuration(0); // Reset duration if date range is incomplete
		}
	};

	const handleCurrencyChange = (value: number) => {
		setDailyRate(value);
	};

	const handleRoomChange = (value: Room) => {
		setSelectedRoom(value);
		setDailyRate(value.roomRate);
	};

	const handleGuestChange = (value: GuestFormValues) => {
		setGuestData(value);
	};

	useEffect(() => {
		// Validate guestData whenever it changes
		const validationResult = FormSchema.safeParse(guestData);
		setIsGuestValid(validationResult.success);
		// if (!validationResult.success) {
		// 	console.error("Validation errors:", validationResult.error.errors);
		// }
	}, [guestData]);

	useEffect(() => {
		setTotalAmount(dailyRate * duration);
	}, [dailyRate, duration]);

	const createReservation = () => {
		if (!dateRange || !isGuestValid || !selectedRoom || dailyRate < 1) {
			console.warn(dateRange, dailyRate, selectedRoom, guestData);
			return;
		}

		const request: CreateStayRequest = {
			startDate: dateRange.from!.toDateString(),
			endDate: dateRange.to!.toDateString(),
			dailyRate: dailyRate,
			totalAmount: totalAmount,
			amountDue: 0,
			amountPaid: totalAmount,
			stayStatus: compareAsc(new Date(), dateRange.from!) == -1 ? StayStatus.BOOKED : StayStatus.INHOUSE,
			guest: guestData,
			room: selectedRoom,
		};
		console.log(request);
	};

	const fetchData = async () => {
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
			console.error("Error fetching stays:", error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex w-full flex-col">
			<div>
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					<div className="mx-auto grid max-w-[70rem] flex-1 auto-rows-max gap-4">
						<div className="flex items-center gap-4">
							<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Create Reservation</h1>
							<div className="hidden items-center gap-2 md:ml-auto md:flex">
								<SaveToolbar onSave={createReservation} buttonDisabled={!dateRange || !isGuestValid || !selectedRoom || dailyRate < 1} />
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
								<RoomSelector occupiedRooms={currentStays.map((s) => s.room)} allRooms={data.rooms} onValueChange={handleRoomChange}></RoomSelector>
								<Card x-chunk="dashboard-07-chunk-5">
									<CardHeader>
										<CardTitle>Stay summary</CardTitle>
									</CardHeader>
									<CardContent>
										<DatePickerForm onValueChange={handleDateChange}></DatePickerForm>
										<RateOverrideForm defaultRate={dailyRate} onValueChange={handleCurrencyChange} />
										<CardTitle className="mt-6">
											Amount Due: {formatCurrency(dailyRate)} x {duration} nights = {formatCurrency(totalAmount)}
										</CardTitle>
									</CardContent>
								</Card>
							</div>
						</div>
						<div className="flex items-center justify-center gap-2 md:hidden">
							<SaveToolbar onSave={createReservation} buttonDisabled={!dateRange || !isGuestValid || !selectedRoom || dailyRate < 1} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
