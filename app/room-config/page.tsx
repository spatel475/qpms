"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { get, put } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { Edit, Save, Undo } from "lucide-react";
import { useEffect, useState } from "react";
import { Room } from "../models/models";
import { CACHE_KEY, roomConfigColumns } from "./columns";

export default function RoomConfig() {
	const [isLoading, setIsLoading] = useState(true);
	const [isEditModeOn, setIsEditModeOn] = useState(false);
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

	const handleUndoChanges = () => {
		setCachedData(CACHE_KEY, []);
		setIsEditModeOn(false);
	};

	const handleSaveChanges = async () => {
		const editedRooms = getCachedData(CACHE_KEY);

		if (!editedRooms || editedRooms.length === 0) {
			toast({
				variant: "default",
				title: "No changes to save",
				description: "There are no room configurations to update.",
			});
			return;
		}

		try {
			const response = await put<Room[]>("/rooms", editedRooms);
			const updatedRooms = response.data;

			setData((prev) => {
				const updatedData = [...prev];
				updatedRooms.forEach((updatedRoom) => {
					const index = updatedData.findIndex((room) => room.id === updatedRoom.id);
					if (index !== -1) {
						updatedData[index] = updatedRoom;
					}
				});
				return updatedData;
			});

			toast({
				variant: "success",
				title: "Room configurations updated successfully",
				description: `${updatedRooms.length} rooms updated`,
			});

			// Clear the cache and turn off edit mode only on successful save
			setCachedData(CACHE_KEY, []);
			setIsEditModeOn(false);
		} catch (error) {
			console.error("Error updating room configurations:", error);

			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem updating room configurations. Please try again.",
			});
		}
	};

	return (
		<Card>
			<CardHeader className="flex flex-row justify-between">
				<div>
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Room Configuration</h1>
					<CardDescription>Manage room types, rates, and availabilty. </CardDescription>
				</div>
				<div className="edit-cell-container">
					{isEditModeOn ? (
						<div className="edit-cell-action">
							<Button variant="outline" size="icon" name="cancel" onClick={handleUndoChanges}>
								<Undo className="h-4 w-4" />
							</Button>{" "}
							<Button variant="outline" size="icon" name="done" onClick={handleSaveChanges}>
								<Save className="h-4 w-4" />
							</Button>
						</div>
					) : (
						<div className="edit-cell-action">
							<Button variant="outline" size="icon" name="edit" onClick={() => setIsEditModeOn(true)}>
								<Edit className="h-4 w-4" />
							</Button>
						</div>
					)}
				</div>
			</CardHeader>
			<CardContent>
				<DataTable isLoading={isLoading} columns={roomConfigColumns(isEditModeOn)} data={data} pagination={pagination} setPagination={setPagination}></DataTable>
			</CardContent>
		</Card>
	);
}
