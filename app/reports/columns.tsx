"use client";

import { formatCurrency } from "@/lib/currency-utils";
import { ColumnDef } from "@tanstack/react-table";
import { DailyReportRecord } from "../api/models";

export const dailyReportColumns = () => {
	const colDefs: ColumnDef<DailyReportRecord, unknown>[] = [
		{
			accessorFn: (x) => x.roomId,
			header: "Room",
		},
		{
			accessorFn: (x) => x.startDate && new Date(x.startDate).toLocaleDateString(undefined, { dateStyle: "medium" }),
			header: "Check In",
		},
		{
			accessorFn: (x) => x.endDate && new Date(x.endDate).toLocaleDateString(undefined, { dateStyle: "medium" }),
			header: "Check Out",
		},
		{
			accessorFn: (x) => x.cash && formatCurrency(x.cash),
			header: "Cash",
		},
		{
			accessorFn: (x) => x.credit && formatCurrency(x.credit),
			header: "Credit",
		},
		{
			accessorFn: (x) => x.rateType,
			header: "Rate Type",
		},
	];

	return colDefs;
};
