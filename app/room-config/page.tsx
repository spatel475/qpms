import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

import data from "@/lib/placeholder-data.json";
import { Room } from "../models/models";
import { roomConfigColumns } from "./columns";

export default function RoomConfig() {
	const rooms: Room[] = data.rooms;
	return (
		<Card>
			<CardHeader>
				<CardTitle>Room Configuration</CardTitle>
				<CardDescription>Manage room types, rates, and availabilty</CardDescription>
			</CardHeader>
			<CardContent>
				<DataTable columns={roomConfigColumns} data={rooms}></DataTable>
			</CardContent>
			{/* <CardFooter className="justify-center border-t p-4">
				<Button size="sm" variant="ghost" className="gap-1">
					<PlusCircle className="h-3.5 w-3.5" />
					Add Variant
				</Button>
			</CardFooter> */}
		</Card>
	);
}
