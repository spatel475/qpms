"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Cigarette, CigaretteOff } from "lucide-react";
import { useState } from "react";
import { Room } from "../models/models";

type Props = {
	allRooms: Array<Room>;
	onValueChange: (value: Room) => void;
};

export default function RoomSelector({ allRooms, onValueChange }: Props) {
	const [smokingFilter, setSmokingFilter] = useState("");
	const [roomTypeFilter, setRoomTypeFilter] = useState("");
	const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

	const handleRoomSelectionChange = (room: Room) => {
		setSelectedRoom(room);
		onValueChange(room);
	};

	allRooms.sort((a, b) => +a.id - +b.id);

	const filteredRooms = allRooms.filter((room) => {
		const isNonSmokingRoom = room.roomType.endsWith("NS");
		const matchesSmoking = !smokingFilter || (smokingFilter === "NS" && isNonSmokingRoom) || (smokingFilter === "S" && !isNonSmokingRoom);
		const matchesRoomType = !roomTypeFilter || room.roomType.startsWith(roomTypeFilter);
		return matchesSmoking && matchesRoomType;
	});

	const availableRooms = filteredRooms.filter((room) => room.roomAvailable);
	const unavailableRooms = filteredRooms.filter((room) => !room.roomAvailable);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Room Selection</CardTitle>
			</CardHeader>
			<CardContent>
				<Label htmlFor="filters">Quick Filters</Label>
				<div className="grid gap-2">
					<ToggleGroup variant="outline" type="single" onValueChange={setSmokingFilter}>
						<ToggleGroupItem value="S" aria-label="Toggle smoking">
							<Cigarette className="m-1" />
							Smoking
						</ToggleGroupItem>
						<ToggleGroupItem value="NS" aria-label="Toggle nonsmoking">
							<CigaretteOff className="m-1" />
							Non-Smoking
						</ToggleGroupItem>
					</ToggleGroup>
					<ToggleGroup variant="outline" type="single" onValueChange={setRoomTypeFilter}>
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
						{availableRooms.map((room) => (
							<Button className="h-16 w-16 mr-2 mb-2 flex-col justify-center items-center p-2 text-center" variant={room.id === selectedRoom?.id ? "default" : "outline"} key={room.id} onClick={() => handleRoomSelectionChange(room)}>
								<CardTitle className="text-lg font-bold">{room.id}</CardTitle>
								<CardTitle className="text-sm">{room.roomType}</CardTitle>
							</Button>
						))}
					</ScrollArea>
					<Label htmlFor="unavailable-rooms">Unavailable Rooms</Label>
					<ScrollArea>
						{unavailableRooms.map((room) => (
							<Button className="h-16 w-16 mr-2 mb-2 flex-col justify-center items-center p-2 text-center" variant="outline" key={room.id} disabled>
								<CardTitle className="text-lg font-bold">{room.id}</CardTitle>
								<CardTitle className="text-sm">{room.roomType}</CardTitle>
							</Button>
						))}
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
