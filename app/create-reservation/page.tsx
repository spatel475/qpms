"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currency-utils";
import data from "@/lib/placeholder-data.json";
import { intervalToDuration } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { DatePickerForm } from "../../components/ui/date-picker";
import { Room } from "../models/models";
import { ProfileForm } from "./guest-form";
import RateOverrideForm from "./rate-override";
import RoomSelector from "./room-selection";

export default function CreateReservation() {
	const [dailyRate, setDailyRate] = useState(0);
	const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
	const [duration, setDuration] = useState(1);
	const [selectedRoom, setSelectedRoom] = useState<Room | undefined>();
	const [totalAmount, setTotalAmount] = useState(0);

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

	useEffect(() => {
		setTotalAmount(dailyRate * duration);
	}, [dailyRate, duration]);

	return (
		<div className="flex w-full flex-col">
			<div>
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					<div className="mx-auto grid max-w-[65rem] flex-1 auto-rows-max gap-4">
						<div className="flex items-center gap-4">
							<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Create Reservation</h1>
							<div className="hidden items-center gap-2 md:ml-auto md:flex">
								<Link href="/dashboard">
									<Button variant="outline">
										<span>Discard</span>
									</Button>
								</Link>
								<Button
									onClick={() => {
										console.log(dateRange, dailyRate, selectedRoom);
									}}
								>
									Save Product
								</Button>
							</div>
						</div>
						<div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-4 lg:gap-8">
							<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
								<Card x-chunk="dashboard-07-chunk-0">
									<CardHeader>
										<CardTitle>Guest Information</CardTitle>
									</CardHeader>
									<CardContent>
										<ProfileForm></ProfileForm>
									</CardContent>
								</Card>
							</div>
							<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
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
								<RoomSelector allRooms={data.rooms} onValueChange={handleRoomChange}></RoomSelector>
							</div>
						</div>
						<div className="flex items-center justify-center gap-2 md:hidden">
							<Button variant="outline">Discard</Button>
							<Button>Save Product</Button>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
