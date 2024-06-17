"use client";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { formatCurrency } from "@/lib/currency-utils";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { Room } from "../api/models";

export const CACHE_KEY = "room_config_edit";
export const roomConfigColumns = (isEditModeOn: boolean) => {
	const colDefs: ColumnDef<Room, unknown>[] = [
		{
			accessorFn: (x) => x.id,
			header: "Room Number",
		},
		{
			accessorFn: (x) => x.roomType,
			header: "Room Type",
		},
		{
			accessorKey: "roomRate",
			header: "Daily Room Rate",
			cell: ({ row }) => {
				const amount = parseFloat(row.getValue("roomRate"));
				const formatted = formatCurrency(amount);
				return flexRender(Input, {
					defaultValue: amount,
					readOnly: !isEditModeOn,
					type: "number",
					step: 0.01,
					min: 1,
					max: 1000,
					size: 1,
					onChange: (c) => editedRows(CACHE_KEY, { id: row.original.id, roomRate: parseFloat(c.target.value) }),
				});
			},
		},
		{
			accessorKey: "weeklyRoomRate",
			header: "Weekly Room Rate",
			cell: ({ row }) => {
				const amount = parseFloat(row.getValue("weeklyRoomRate"));
				const formatted = formatCurrency(amount);
				return flexRender(Input, {
					defaultValue: amount,
					readOnly: !isEditModeOn,
					type: "number",
					step: 0.01,
					min: 1,
					max: 1000,
					size: 1,
					onChange: (c) => editedRows(CACHE_KEY, { id: row.original.id, weeklyRoomRate: parseFloat(c.target.value) }),
				});
			},
		},
		{
			accessorFn: (x) => x.roomAvailable,
			header: "Room Available",
			cell: ({ row }) =>
				flexRender(Switch, {
					defaultChecked: row.original.roomAvailable,
					disabled: !isEditModeOn,
					onCheckedChange: (newVal) => editedRows(CACHE_KEY, { id: row.original.id, roomAvailable: newVal }),
				}),
		},
		{
			accessorFn: (x) => x.unavailablityReason,
			header: "Unavailabilty Reason",
			cell: ({ row }) =>
				flexRender(Input, {
					defaultValue: row.original.unavailablityReason,
					readOnly: !isEditModeOn,
					onChange: (c) => editedRows(CACHE_KEY, { id: row.original.id, unavailablityReason: c.target.value }),
				}),
		},
	];

	return colDefs;
};

const editedRows = (key: string, updatedFields: Partial<Room>) => {
	let existingEditedRows: Room[] = getCachedData(key) || [];
	const existingRowIndex = existingEditedRows.findIndex((r) => r.id === updatedFields.id);

	if (existingRowIndex !== -1) {
		// Merge the existing room object with the new changes
		const existingRoom = existingEditedRows[existingRowIndex];
		const updatedRoom = { ...existingRoom, ...updatedFields };
		existingEditedRows[existingRowIndex] = updatedRoom;
	} else {
		// If the room does not exist, add the new room object
		existingEditedRows.push(updatedFields as Room);
	}

	setCachedData(key, existingEditedRows);
};
