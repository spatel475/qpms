import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface DataTablePaginationProps<TData> {
	table: Table<TData>;
	pagination: {
		totalCount: number;
		totalPages: number;
		currentPage: number;
		pageSize: number;
	};
	setPagination: (pagination: any) => void;
}

export function DataTablePagination<TData>({ table, pagination, setPagination }: DataTablePaginationProps<TData>) {
	const handlePageChange = (pageIndex: number) => {
		setPagination((prev: any) => ({ ...prev, currentPage: pageIndex + 1 }));
	};

	const handlePageSizeChange = (pageSize: number) => {
		setPagination((prev: any) => ({ ...prev, pageSize, currentPage: 1 })); // Reset to first page
	};

	const startCount = (pagination.currentPage - 1) * pagination.pageSize + 1;
	const endCount = Math.min(pagination.currentPage * pagination.pageSize, pagination.totalCount);

	return (
		<div className="flex flex-col items-center justify-between">
			<div className="flex items-center justify-between w-full">
				<div className="flex-1 text-sm text-muted-foreground">
					Showing{" "}
					<strong>
						{startCount}-{endCount}
					</strong>{" "}
					of <strong>{pagination.totalCount}</strong> rows.
				</div>
				<div className="flex items-center space-x-6 lg:space-x-8">
					<div className="flex items-center space-x-2">
						<p className="text-sm font-medium">Rows per page</p>
						<Select value={`${pagination.pageSize}`} onValueChange={(value) => handlePageSizeChange(Number(value))}>
							<SelectTrigger className="h-8 w-[70px]">
								<SelectValue placeholder={pagination.pageSize} />
							</SelectTrigger>
							<SelectContent side="top">
								{[25, 50, 75, 100].map((pageSize) => (
									<SelectItem key={pageSize} value={`${pageSize}`}>
										{pageSize}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="flex w-[100px] items-center justify-center text-sm font-medium">
						Page {pagination.currentPage} of {pagination.totalPages}
					</div>
					<div className="flex items-center space-x-2">
						<Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => handlePageChange(0)} disabled={pagination.currentPage === 1}>
							<span className="sr-only">Go to first page</span>
							<DoubleArrowLeftIcon className="h-4 w-4" />
						</Button>
						<Button variant="outline" className="h-8 w-8 p-0" onClick={() => handlePageChange(pagination.currentPage - 2)} disabled={pagination.currentPage === 1}>
							<span className="sr-only">Go to previous page</span>
							<ChevronLeftIcon className="h-4 w-4" />
						</Button>
						<Button variant="outline" className="h-8 w-8 p-0" onClick={() => handlePageChange(pagination.currentPage)} disabled={pagination.currentPage === pagination.totalPages}>
							<span className="sr-only">Go to next page</span>
							<ChevronRightIcon className="h-4 w-4" />
						</Button>
						<Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => handlePageChange(pagination.totalPages - 1)} disabled={pagination.currentPage === pagination.totalPages}>
							<span className="sr-only">Go to last page</span>
							<DoubleArrowRightIcon className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
