"use client";

import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { DataTablePagination } from "./data-table-pagination";

interface DataTableProps<TData, TValue> {
	isLoading: boolean;
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	pagination: {
		totalCount: number;
		totalPages: number;
		currentPage: number;
		pageSize: number;
	};
	setPagination: (pagination: any) => void;
	enableExpand?: boolean; // Optional prop for expandable feature
	ExpandComponent?: React.FC<{ row: TData }>; // Custom expandable component
}

export function DataTable<TData, TValue>({ isLoading, columns, data, pagination, setPagination, enableExpand = false, ExpandComponent }: DataTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = useState({});
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
			pagination: {
				pageIndex: pagination.currentPage - 1,
				pageSize: pagination.pageSize,
			},
		},
		pageCount: pagination.totalPages,
		manualPagination: true,
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	useEffect(() => {
		table.setPageCount(pagination.totalPages);
	}, [pagination.totalPages]);

	const toggleExpandRow = (rowId: string) => {
		// multi expand allowed
		setExpandedRows((prev) => {
			const newExpandedRows = new Set(prev);
			if (newExpandedRows.has(rowId)) {
				newExpandedRows.delete(rowId);
			} else {
				newExpandedRows.add(rowId);
			}
			return newExpandedRows;
		});

		// single
		// setExpandedRows(new Set([rowId]));
	};

	return (
		<div className="space-y-4">
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} colSpan={header.colSpan}>
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<React.Fragment key={row.id}>
									{enableExpand ? (
										<Collapsible asChild open={expandedRows.has(row.id)}>
											<>
												<TableRow data-state={row.getIsSelected() && "selected"}>
													{row.getVisibleCells().map((cell) => (
														<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
													))}
													<TableCell>
														<CollapsibleTrigger asChild>
															<Button variant="outline" size="icon" onClick={() => toggleExpandRow(row.id)}>
																{expandedRows.has(row.id) ? <ChevronUp /> : <ChevronDown />}
															</Button>
														</CollapsibleTrigger>
													</TableCell>
												</TableRow>
												<CollapsibleContent asChild>
													<TableRow>
														<TableCell colSpan={columns.length + 1}>{ExpandComponent && <ExpandComponent row={row.original} />}</TableCell>
													</TableRow>
												</CollapsibleContent>
											</>
										</Collapsible>
									) : (
										<TableRow data-state={row.getIsSelected() && "selected"}>
											{row.getVisibleCells().map((cell) => (
												<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
											))}
										</TableRow>
									)}
								</React.Fragment>
							))
						) : isLoading ? (
							<TableRow>
								<TableCell colSpan={columns.length + (enableExpand ? 1 : 0)} className="h-24 text-center">
									Loading...
								</TableCell>
							</TableRow>
						) : (
							<TableRow>
								<TableCell colSpan={columns.length + (enableExpand ? 1 : 0)} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<DataTablePagination table={table} pagination={pagination} setPagination={setPagination} />
		</div>
	);
}
