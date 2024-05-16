"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { get } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { useEffect, useState } from "react";
import { Room } from "../models/models";
import { roomConfigColumns } from "./columns";

export default function RoomConfig() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<Room[]>([]);
	const [pagination, setPagination] = useState({
		totalCount: 0,
		totalPages: 0,
		currentPage: 1,
		pageSize: 20,
	});

	const fetchData = async (page: number, pageSize: number) => {
		setIsLoading(true);

		const cacheKey = `rooms-page-${page}-size-${pageSize}`;
		const cachedData = getCachedData(cacheKey);

		if (cachedData) {
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
				const response = await get<Room[]>("/rooms", {
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
				console.error("Error fetching rooms:", error);
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		fetchData(pagination.currentPage, pagination.pageSize);
	}, [pagination.currentPage, pagination.pageSize]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Room Configuration</CardTitle>
				<CardDescription>Manage room types, rates, and availabilty</CardDescription>
			</CardHeader>
			<CardContent>
				<DataTable isLoading={isLoading} columns={roomConfigColumns} data={data} pagination={pagination} setPagination={setPagination}></DataTable>
			</CardContent>
			<CardFooter className="justify-center border-t p-4">
				<Button size="sm" variant="default" className="gap-1">
					Save
				</Button>
			</CardFooter>
		</Card>
	);
}
