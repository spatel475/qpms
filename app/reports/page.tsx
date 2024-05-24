"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currency-utils";
import { get } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { useCallback, useEffect, useState } from "react";
import { DailyReportRecord } from "../api/reports/route";
import { dailyReportColumns } from "./columns";
const DailyReportPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<DailyReportRecord[]>([]);
	const [pagination, setPagination] = useState({
		totalCount: 0,
		totalPages: 1,
		currentPage: 1,
		pageSize: 25,
	});

	const fetchRooms = useCallback(
		async (page: number, pageSize: number) => {
			setIsLoading(true);

			const cacheKey = `reports-page-${page}-size-${pageSize}`;
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
		fetchRooms(pagination.currentPage, pagination.pageSize);
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
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Daily Report - {new Date().toDateString()}</h1>
				</div>
				{/* <Button className="gap-1" variant="outline" onClick={(e) => window.print()}>
					<RefreshCw className="h-4 w-4" />
				</Button> */}
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

export default DailyReportPage;
