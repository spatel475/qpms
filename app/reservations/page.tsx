"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Routes } from "@/components/navbar/nav-links";
import { FilterComponent } from "@/components/stay-filter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlusCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import useFetchData from "../hooks/useFetchStays";
import { useStayColumns } from "./column";
import ReservationDetail from "./reservation-details";

export default function ReservationsPage() {
	const { data, isLoading, filter, setFilter, pagination, setPagination, fetchData } = useFetchData(1, 25);

	const refreshData = async () => {
		await fetchData(pagination.currentPage, pagination.pageSize, false);
	};

	const columns = useStayColumns();
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-4">
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Reservations</h1>
					<div className="items-center gap-2 md:ml-auto md:flex">
						<FilterComponent filters={filter} onApplyFilters={setFilter} />
						<Button variant="outline" onClick={refreshData}>
							<RefreshCw className="h-4 w-4" />
						</Button>
						<Link href={Routes.ReservationForm}>
							<Button className="gap-1">
								<PlusCircle className="h-4 w-4" />
								Create Reservation
							</Button>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<DataTable isLoading={isLoading} columns={columns} data={data} pagination={pagination} setPagination={setPagination} enableExpand={true} ExpandComponent={ReservationDetail} />
			</CardContent>
		</Card>
	);
}
