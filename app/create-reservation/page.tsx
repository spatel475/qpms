"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { formatCurrency } from "@/lib/currency-utils";
import data from "@/lib/placeholder-data.json";
import { addDays, intervalToDuration } from "date-fns";
import { Cigarette, CigaretteOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { DatePickerForm } from "../../components/ui/date-picker";
import { Room } from "../models/models";
import { ProfileForm } from "./guest-form";
import RateOverrideForm from "./rate-override";

export default function CreateReservation() {
	const [dailyRate, setDailyRate] = useState(0);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({ from: new Date(), to: addDays(new Date(), 2) });
	const [duration, setDuration] = useState(0);
	const [selectedRoom, setSelectedRoom] = useState<Room | undefined>();

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
											Amount Due: {formatCurrency(dailyRate)} x {duration} nights = {formatCurrency(dailyRate * duration)}
										</CardTitle>
									</CardContent>
								</Card>
								<Card x-chunk="dashboard-07-chunk-3">
									<CardHeader>
										<CardTitle>Room Selection</CardTitle>
									</CardHeader>
									<CardContent>
										<Label htmlFor="filters">Quick Filters</Label>
										<div className="grid gap-2">
											<ToggleGroup variant="outline" type="single">
												<ToggleGroupItem value="S" aria-label="Toggle smoking">
													<Cigarette className="m-1" />
													Smoking
												</ToggleGroupItem>
												<ToggleGroupItem value="NS" aria-label="Toggle nonsmoking">
													<CigaretteOff className="m-1" />
													Non-Smoking
												</ToggleGroupItem>
											</ToggleGroup>
											<ToggleGroup variant="outline" type="single">
												<ToggleGroupItem value="F1" aria-label="Toggle single">
													Single
												</ToggleGroupItem>
												<ToggleGroupItem value="F2" aria-label="Toggle double full">
													Double-Full
												</ToggleGroupItem>
												<ToggleGroupItem value="Q2" aria-label="Toggle double queen">
													Double-Queen
												</ToggleGroupItem>
												<ToggleGroupItem value="K1" aria-label="Toggle king">
													King
												</ToggleGroupItem>
											</ToggleGroup>
										</div>
										<div className="grid gap-2 mt-8">
											<Label htmlFor="available-rooms">Available Rooms</Label>
											<ScrollArea>
												{data.rooms.map((room) => {
													return (
														<Button className="h-16 w-16 mr-2 mb-2 flex-col justify-center items-center p-2 text-center" variant={room.id == selectedRoom?.id ? "default" : "outline"} key={room.id} onClick={() => handleRoomChange(room)}>
															<CardTitle className="text-lg font-bold">{room.id}</CardTitle>
															<CardTitle className="text-sm ">{room.roomType}</CardTitle>
														</Button>
													);
												})}
											</ScrollArea>
										</div>
									</CardContent>
								</Card>
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
