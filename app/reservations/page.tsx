"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Routes } from "@/components/nav-links";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { get } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { PlusCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { StayResponse } from "../api/stays/route";
import { useStayColumns } from "./column";
import ReservationDetail from "./reservation-details";

export default function ReservationsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<StayResponse[]>([]);
	const [pagination, setPagination] = useState({
		totalCount: 0,
		totalPages: 0,
		currentPage: 1,
		pageSize: 20,
	});

	const fetchData = async (page: number, pageSize: number, fromCache = true) => {
		setIsLoading(true);

		const cacheKey = `stays-page-${page}-size-${pageSize}`;
		const cachedData = getCachedData(cacheKey);

		if (cachedData && fromCache) {
			setData(cachedData.data);
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
				const response = await get<StayResponse[]>("/stays", {
					queryParams: {
						page: pagination.currentPage.toString(),
						limit: pagination.pageSize.toString(),
					},
				});
				const fetchedData = response.data;
				const totalCount = parseInt(response.headers["x-total-count"], 10);
				const totalPages = Math.ceil(totalCount / pageSize);

				setData(fetchedData);
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
				console.error("Error fetching stays:", error);
				setIsLoading(false);
			}
		}
	};

	const refreshData = async () => {
		await fetchData(pagination.currentPage, pagination.pageSize, false);
	};

	useEffect(() => {
		fetchData(pagination.currentPage, pagination.pageSize);
	}, [pagination.currentPage, pagination.pageSize]);

	const columns = useStayColumns();
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-4">
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Reservations</h1>
					<div className="items-center gap-2 md:ml-auto md:flex">
						<Button className="gap-1" variant="outline" onClick={refreshData}>
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
