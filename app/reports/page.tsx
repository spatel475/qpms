"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import withAuth from "@/components/withAuth";
import { formatCurrency } from "@/lib/currency-utils";
import { get } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { Printer } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { DailyReportRecord } from "../api/models";
import { dailyReportColumns } from "./columns";

const DailyReportPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<DailyReportRecord[]>([]);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [pagination, setPagination] = useState({
		totalCount: 0,
		totalPages: 1,
		currentPage: 1,
		pageSize: 25,
	});

	const updateReportDate = (date: Date) => {
		setSelectedDate(date);
		fetchRooms(pagination.currentPage, pagination.pageSize, date);
	};

	const fetchRooms = useCallback(
		async (page: number, pageSize: number, date: Date) => {
			setIsLoading(true);

			const cacheKey = `reports-page-${page}-size-${pageSize}-date-${date.toDateString()}`;
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
					const response = await get<DailyReportRecord[]>("/reports", {
						queryParams: {
							page: pagination.currentPage.toString(),
							limit: pagination.pageSize.toString(),
							date: date.toDateString(),
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
		},
		[pagination.currentPage, pagination.pageSize]
	);

	useEffect(() => {
		fetchRooms(pagination.currentPage, pagination.pageSize, selectedDate);
	}, [fetchRooms, pagination.currentPage, pagination.pageSize]);

	// Function to compute the sum of all cash amounts
	const sumCash = (records: DailyReportRecord[]): string => {
		return formatCurrency(records.reduce((sum, record) => sum + +record.cash, 0));
	};

	// Function to compute the sum of all credit amounts
	const sumCredit = (records: DailyReportRecord[]): string => {
		return formatCurrency(records.reduce((sum, record) => sum + +record.credit, 0));
	};

	// Function to compute the sum of all cash and credit amounts (total)
	const sumTotal = (records: DailyReportRecord[]): string => {
		return formatCurrency(records.reduce((sum, record) => sum + +record.cash + +record.credit, 0));
	};

	// Function to count the frequency of distinct rate types
	const frequencyOfRateTypes = (records: DailyReportRecord[]): Record<string, number> => {
		const x = records.reduce((acc, record) => {
			acc[record.rateType] = (acc[record.rateType] || 0) + 1;
			return acc;
		}, {} as Record<string, number>);
		return x;
	};

	return (
		<Card id="report-to-print">
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Daily Report - {selectedDate?.toDateString()}</h1>
				</div>
				<div className="flex items-center gap-2" id="report-page-tools">
					<DatePicker defaultDate={selectedDate} onValueChange={(d) => updateReportDate(d ?? new Date())} className="col-span-3" />
					<Button size="icon" variant="outline" onClick={(e) => window.print()}>
						<Printer className="h-4 w-4" />
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<DataTable isLoading={isLoading} columns={dailyReportColumns()} data={data} pagination={pagination} setPagination={setPagination} hidePagination={true} />
			</CardContent>
			<div className="flex justify-evenly">
				<CardContent>
					<CardTitle className="text-sm font-medium">Total</CardTitle>
					<div className="text-lg font-bold">{sumTotal(data)}</div>
				</CardContent>
				<CardContent>
					<CardTitle className="text-sm font-medium">Cash</CardTitle>
					<div className="text-lg font-bold">{sumCash(data)}</div>
				</CardContent>
				<CardContent>
					<CardTitle className="text-sm font-medium">Credit</CardTitle>
					<div className="text-lg font-bold">{sumCredit(data)}</div>
				</CardContent>
				<CardContent>
					<CardTitle className="text-sm font-medium">Daily</CardTitle>
					<div className="text-lg font-bold">{frequencyOfRateTypes(data)["Daily"] ?? 0}</div>
				</CardContent>
				<CardContent>
					<CardTitle className="text-sm font-medium">Weekly</CardTitle>
					<div className="text-lg font-bold">{frequencyOfRateTypes(data)["Weekly"] ?? 0}</div>
				</CardContent>
			</div>
		</Card>
	);
};

export default withAuth(DailyReportPage);
