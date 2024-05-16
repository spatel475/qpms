import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>;
	title: string;
}

export function DataTableColumnHeader<TData, TValue>({ column, title, className }: DataTableColumnHeaderProps<TData, TValue>) {
	return (
		<div className={cn("flex items-center space-x-2", className)}>
			{column.getCanSort() ? (
				<div className="">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent">
								<span>{title}</span>
								{column.getIsSorted() === "desc" ? <ArrowDownIcon className="ml-2 h-4 w-4" /> : column.getIsSorted() === "asc" ? <ArrowUpIcon className="ml-2 h-4 w-4" /> : <CaretSortIcon className="ml-2 h-4 w-4" />}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuItem onClick={() => column.toggleSorting(false)}>
								<ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
								Asc
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => column.toggleSorting(true)}>
								<ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
								Desc
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					{FilterFunction()}
				</div>
			) : (
				<div className="">
					<Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent pointer-events-none">
						<span>{title}</span>
					</Button>
					{FilterFunction()}
				</div>
			)}
		</div>
	);

	function FilterFunction() {
		return column.getCanFilter() && <Input value={(column.getFilterValue() as string) ?? ""} onChange={(e) => column.setFilterValue(e.target.value)} />;
	}
}
