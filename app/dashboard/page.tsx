"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { columns } from "./column";

export interface Stay {
	id: string;
	guest: {
		firstName: string;
		lastName: string;
	};
	stayStatus: string;
	dailyRate: number;
	room: {
		roomType: string;
	};
	startDate: string;
	endDate: string;
}

export default function Dashboard() {
	const [data, setData] = useState<Stay[]>([]);

	useEffect(() => {
		// Fetch data from API
		fetch("/api/stays")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error fetching stays:", error));
	}, []);

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-4">
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Reservations</h1>
					<div className="items-center gap-2 md:ml-auto md:flex">
						<Link href="create-reservation">
							<Button className="gap-1">
								<PlusCircle className="h-4 w-4" />
								Create Reservation
							</Button>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<DataTable columns={columns} data={data} />
			</CardContent>
			<CardFooter>
				<div className="text-xs text-muted-foreground">
					Showing <strong>{Math.min(data.length, 50)}</strong> of <strong>{data.length}</strong> reservations
				</div>
			</CardFooter>
		</Card>
	);
}
