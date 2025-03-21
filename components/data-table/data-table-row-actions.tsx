"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
	menuItems: {
		id: string;
		label: any;
		action: any;
		class?: string;
	}[];
}

export function DataTableRowActions<TData>({ row, menuItems }: DataTableRowActionsProps<TData>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
					<DotsHorizontalIcon className="h-4 w-4" />
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[160px]">
				{menuItems.map((item) => (
					<DropdownMenuItem key={item.id} onClick={item.action} className={item.class}>
						{item.label}
					</DropdownMenuItem>
				))}
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
