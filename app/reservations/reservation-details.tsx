"use client";

import { Routes } from "@/components/navbar/nav-links";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { formatCurrency } from "@/lib/currency-utils";
import { get, put } from "@/lib/fetch";
import { differenceInDays } from "date-fns";
import { Calendar, ChevronDown, CreditCard, User2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { StayResponse } from "../api/models";
import { StayStatus } from "../models/models";

interface ReservationDetailProps {
	row: StayResponse;
}

const ReservationDetail: React.FC<ReservationDetailProps> = ({ row }) => {
	const router = useRouter();
	const [newStayStatus, setNewStayStatus] = useState(row.stayStatus);
	const [relatedStays, setRelatedStays] = useState<StayResponse[]>([]);
	const [dialogOpen, setDialogOpen] = useState(false);

	const stayClicked = async () => {
		await fetchRelatedStays();
		setDialogOpen(true);
	};

	const handleDialogChange = (isOpen: boolean) => {
		setDialogOpen(isOpen);
		if (!isOpen) {
			setRelatedStays([]);
		}
	};

	const fetchRelatedStays = async () => {
		const response = await get<StayResponse[]>(`/stays/${row.relatedStayId}/related`);
		setRelatedStays(response.data);
	};

	const save = async () => {
		try {
			const response = await put<StayResponse>(`/stays/${row.id}/update-status`, { newStayStatus: newStayStatus });
			toast({
				variant: "success",
				title: "Reservation updated successfully",
				description: `Reservation Status: ${response.data.stayStatus.replace("_", " ")}`,
			});
		} catch (err) {
			console.warn(err);
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem when updating stay status",
			});
		}
	};

	return (
		<div className="p-4">
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Guest Information</CardTitle>
						<User2 className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-lg font-bold">{row.guest.firstName + " " + row.guest.lastName}</div>
						<p className="text-sm text-muted-foreground">
							<strong>DL Number:</strong> {row.guest.dlNumber}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Phone:</strong> {row.guest.phoneNumber}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Address:</strong> {row.guest.address}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Comments:</strong> {row.guest.comments}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Stay Details
							{row.relatedStayId && (
								<Button variant="link" className="text-blue-500" onClick={stayClicked}>
									View Related Stays
								</Button>
							)}
						</CardTitle>
						<Calendar className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-lg font-bold">{new Date(row.startDate).toDateString() + " to " + new Date(row.endDate).toDateString()}</div>
						<p className="text-sm text-muted-foreground">
							<strong>Duration: </strong>
							{Math.abs(differenceInDays(row.startDate, row.endDate)) + " days"}
							{" / "}
							{Math.ceil(Math.abs(differenceInDays(row.startDate, row.endDate)) / 7) + " weeks"}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Stay Type:</strong> {!!row.weeklyRate ? "Weekly" : "Daily"}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Unit Rate Charged:</strong> {formatCurrency(row.weeklyRate ?? row.dailyRate ?? 0)}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Stay Status:</strong> {row.stayStatus.replace("_", " ")}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Adults:</strong> {row.numOfAdults}
							{" / "}
							<strong>Children:</strong> {row.numOfChildren}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Charges</CardTitle>
						<CreditCard className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-lg font-bold">{"Total: " + formatCurrency(row.totalCharge ?? 0)}</div>
						<p className="text-sm text-muted-foreground">
							<strong>Payment Mode:</strong> {row.paymentMode.toUpperCase()}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Amount Due:</strong> {formatCurrency(row.amountDue ?? 0)}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Amount Paid:</strong> {formatCurrency(row.amountPaid ?? 0)}
						</p>
					</CardContent>
				</Card>
			</div>
			<div className="flex justify-center gap-4 mt-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">
							Update Stay Status
							<ChevronDown />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Guest has ...</DropdownMenuLabel>
						<DropdownMenuRadioGroup value={newStayStatus} onValueChange={setNewStayStatus}>
							<DropdownMenuRadioItem value={StayStatus.RESERVED}>Made Reservation</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value={StayStatus.OCCUPIED}>Checked In</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value={StayStatus.CHECKED_OUT}>Checked Out</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button onClick={save} disabled={row.stayStatus === newStayStatus}>
					Save
				</Button>
			</div>

			{
				<Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
					<DialogContent className="min-w-[50vw]">
						<DialogHeader>
							<DialogTitle>Related Stays</DialogTitle>
						</DialogHeader>
						<div className="flex flex-col items-center justify-center w-[100%]">
							{relatedStays?.length > 0
								? relatedStays.map((stay) => (
										<div key={stay.id} className="flex items-center gap-2">
											<div>{stay.guest.firstName + " " + stay.guest.lastName}</div>
											<div>| {stay.roomId}</div>
											<div>| {new Date(row.startDate).toDateString() + " to " + new Date(row.endDate).toDateString()}</div>
											<Link href={`${Routes.ReservationForm}?id=${stay.id}`} target="_blank">
												|<Button variant="link">View</Button>
											</Link>
										</div>
								  ))
								: "No related stays found"}
						</div>
					</DialogContent>
				</Dialog>
			}
		</div>
	);
};

export default ReservationDetail;
