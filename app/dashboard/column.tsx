"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table/data-table-row-actions";
import { StayStatus } from "../models/models";
import { Stay } from "./page";

export const columns: ColumnDef<Stay>[] = [
	// {
	// 	id: "select",
	// 	header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" className="translate-y-[2px]" />,
	// 	cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" className="translate-y-[2px]" />,
	// 	enableSorting: false,
	// 	enableHiding: false,
	// },
	{
		header: "Name",
		accessorKey: "guest",
		cell: ({ row }) => `${row.original.guest.firstName} ${row.original.guest.lastName}`,
	},
	{
		accessorKey: "stayStatus",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
		cell: ({ row }) => {
			const status: string = row.getValue("stayStatus");
			let classBg = "";
			let statusSpaced = status;
			if (status == StayStatus.BOOKED) {
				classBg = "blue";
			} else if (status == StayStatus.INHOUSE) {
				classBg = "warn";
				statusSpaced = "IN HOUSE";
			} else {
				classBg = "success";
				statusSpaced = "CHECKED OUT";
			}

			return (
				<Badge variant="outline" className={classBg}>
					{statusSpaced}
				</Badge>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		header: "Room Type",
		accessorKey: "room.roomType",
		cell: ({ row }) => row.original.room.roomType,
		enableSorting: true,
	},
	{
		header: "Start Date",
		accessorKey: "startDate",
		cell: ({ row }) => new Date(row.getValue("startDate")).toLocaleString(),
	},
	{
		header: "End Date",
		accessorKey: "endDate",
		cell: ({ row }) => new Date(row.getValue("endDate")).toLocaleString(),
	},
	{
		id: "actions",
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
