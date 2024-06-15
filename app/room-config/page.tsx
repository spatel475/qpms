"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import withAuth from "@/components/withAuth";
import { put } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { Edit, Save, Undo } from "lucide-react";
import { useState } from "react";
import useFetchRooms from "../hooks/useFetchRooms";
import { Room } from "../models/models";
import { CACHE_KEY, roomConfigColumns } from "./columns";

const RoomConfig = () => {
	const [isEditModeOn, setIsEditModeOn] = useState(false);
	const { rooms, setRooms, isLoading, pagination, setPagination, fetchAllRooms } = useFetchRooms(1, 25);

	const clearCache = () => {
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

			setRooms((prev) => {
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

			clearCache();
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
					<CardDescription>Manage room types, rates, and availability.</CardDescription>
				</div>
				<div className="edit-cell-container">
					{isEditModeOn ? (
						<div className="edit-cell-action">
							<Button variant="outline" size="icon" name="cancel" onClick={clearCache}>
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
				<DataTable isLoading={isLoading} columns={roomConfigColumns(isEditModeOn)} data={rooms} pagination={pagination} setPagination={setPagination} />
			</CardContent>
		</Card>
	);
};

export default withAuth(RoomConfig);
