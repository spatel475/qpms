"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table/data-table-row-actions";
import { Routes } from "@/components/nav-links";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { StayResponse } from "../api/stays/route";
import { StayStatus } from "../models/models";

export const useStayColumns = (): ColumnDef<StayResponse>[] => {
	const router = useRouter();

	return useMemo(
		() => [
			{
				header: ({ column }) => <DataTableColumnHeader column={column} title="Guest" />,
				accessorKey: "guest",
				cell: ({ row }) => `${row.original.guest.firstName} ${row.original.guest.lastName}`,
				filterFn: (row, id, value) => {
					return row.original.guest.firstName.toLowerCase().includes(value.toLowerCase()) || row.original.guest.lastName.toLowerCase().includes(value.toLowerCase());
				},
			},
			{
				accessorKey: "stayStatus",
				header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
				cell: ({ row }) => {
					const status: string = row.getValue("stayStatus");
					let classBg = "";
					let statusSpaced = status;
					if (status === StayStatus.BOOKED) {
						classBg = "status-booked";
					} else if (status === StayStatus.INHOUSE) {
						classBg = "status-in-house";
						statusSpaced = "IN HOUSE";
					} else {
						classBg = "status-checked-out";
						statusSpaced = "CHECKED OUT";
					}

					return (
						<Badge variant="outline" className={classBg}>
							{statusSpaced}
						</Badge>
					);
				},
				enableSorting: false,
			},
			{
				header: ({ column }) => <DataTableColumnHeader column={column} title="Room" />,
				accessorKey: "room.id",
				cell: ({ row }) => row.original.room.id,
				enableSorting: false,
			},
			{
				header: ({ column }) => <DataTableColumnHeader column={column} title="Start Date" />,
				accessorKey: "startDate",
				cell: ({ row }) => new Date(row.getValue("startDate")).toLocaleDateString(),
			},
			{
				header: ({ column }) => <DataTableColumnHeader column={column} title="End Date" />,
				accessorKey: "endDate",
				cell: ({ row }) => new Date(row.getValue("endDate")).toLocaleDateString(),
			},
			{
				id: "actions",
				cell: ({ row }) => {
					return (
						<DataTableRowActions
							row={row}
							menuItems={[
								{
									id: "edit",
									label: "Edit reservation",
									action: () => router.push(`${Routes.ReservationForm}?id=${row.original.id}`),
								},
								{
									id: "copy",
									label: "Make new copy",
									action: () => router.push(`${Routes.ReservationForm}?id=${row.original.id}&copy=1`),
								},
							]}
						/>
					);
				},
			},
		],
		[router]
	);
};
