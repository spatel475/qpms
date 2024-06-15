"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Routes } from "@/components/navbar/nav-links";
import { FilterComponent } from "@/components/stay-filter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import withAuth from "@/components/withAuth";
import { PlusCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import useFetchRooms from "../hooks/useFetchRooms";
import useFetchStays from "../hooks/useFetchStays";
import { useStayColumns } from "./column";
import Dashboard from "./dashboard";
import ReservationDetail from "./reservation-details";

const ReservationsPage = () => {
	const { rooms, isLoading: isRoomsLoading } = useFetchRooms(1, 25);
	const { stays, isLoading, filter, setFilter, pagination, setPagination, fetchData } = useFetchStays(1, 25);

	const refreshData = async () => {
		await fetchData(pagination.currentPage, pagination.pageSize, false);
	};

	// const { data: session, status } = useSession();
	// console.log("====================================");
	// console.log(session, status);
	// console.log("====================================");
	const columns = useStayColumns();
	return (
		<Card>
			<Tabs defaultValue="reservation">
				<div className="flex items-center gap-4 px-6 pt-6">
					<TabsList>
						<TabsTrigger value="reservation">Reservations Overview</TabsTrigger>
						<TabsTrigger value="dashboard">Occupancy Timeline</TabsTrigger>
					</TabsList>
					<div className="items-center gap-2 md:ml-auto md:flex">
						<FilterComponent filters={filter} onApplyFilters={setFilter} />
						<Button variant="outline" size="icon" onClick={refreshData}>
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
				<TabsContent value="reservation">
					<CardContent>
						<CardDescription className="mb-4">List of reservations with detailed view</CardDescription>
						<DataTable isLoading={isLoading} columns={columns} data={stays} pagination={pagination} setPagination={setPagination} enableExpand={true} ExpandComponent={ReservationDetail} />
					</CardContent>
				</TabsContent>
				<TabsContent value="dashboard">
					<CardContent>
						<CardDescription className="mb-4">Weekly room availability and occupancy at a glance</CardDescription>
						<Dashboard rooms={rooms} stays={stays} />
					</CardContent>
				</TabsContent>
			</Tabs>
		</Card>
	);
};

export default withAuth(ReservationsPage);
