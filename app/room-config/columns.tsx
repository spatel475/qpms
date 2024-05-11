"use client";

import { ColumnDef, flexRender } from "@tanstack/react-table";
import { Room } from "../models/models";
import { formatCurrency } from "@/lib/currency-utils";
import { Switch } from "@/components/ui/switch";

export const roomConfigColumns: ColumnDef<Room>[] = [
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
			return formatCurrency(amount);
		},
		meta: {
			textAlign: "right",
		},
	},
	{
		accessorFn: (x) => x.roomAvailable,
		header: "Room Available",
		cell: ({ row }) => flexRender(Switch, { defaultChecked: row.original.roomAvailable }),
	},
	{
		accessorFn: (x) => x.unavailablityReason,
		header: "Unavailabilty Reason",
	},
];
