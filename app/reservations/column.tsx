"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table/data-table-row-actions";
import { Routes } from "@/components/navbar/nav-links";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { compareAsc } from "date-fns";
import { CircleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { StayResponse } from "../api/models";
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
				header: ({ column }) => <DataTableColumnHeader column={column} title="Room" />,
				accessorKey: "room.id",
				cell: ({ row }) => row.original.room.id,
				enableSorting: false,
			},
			{
				accessorKey: "stayStatus",
				header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
				cell: ({ row }) => {
					const status: string = row.getValue("stayStatus");
					let classBg = `status-${status.toLowerCase().replace("_", "-")}`;
					let statusSpaced = status.replace("_", " ");

					return (
						<Badge variant="outline" className={classBg}>
							{statusSpaced}
						</Badge>
					);
				},
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
				cell: ({ row }) => {
					const mapBg: { [key: string]: string } = {
						"-1": "hidden",
						"0": "text-yellow-500",
						"1": "text-red-500",
					};

					const endDateStr: string = row.getValue("endDate");
					const endDate = new Date(endDateStr);
					endDate.setHours(0, 0, 0, 0);

					const currentDate = new Date();
					currentDate.setHours(0, 0, 0, 0);
					const diff = compareAsc(currentDate, endDate);

					const status: string = row.getValue("stayStatus");
					const classBg = status != StayStatus.CHECKED_OUT ? `h-5 w-5 ${mapBg[diff.toString()]}` : "hidden";

					return (
						<div className="flex items-center gap-2">
							{new Date(row.getValue("endDate")).toLocaleDateString()}
							<CircleAlert className={classBg} />
						</div>
					);
				},
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
