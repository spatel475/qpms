"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useState } from "react";

type Props = {
	className?: string;
	defaultDate?: Date | undefined;
	onValueChange: (value: Date | undefined) => void;
	label?: string;
};

export function DatePicker(p: Props) {
	const [date, setDate] = useState<Date | undefined>(p.defaultDate);

	const handleDateChange = (date: Date | undefined) => {
		setDate(date);
		p.onValueChange(date);
	};
	return (
		<div className={p.className}>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant={"outline"} className={cn(" justify-start text-left font-normal", !date && "text-muted-foreground")}>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date ? format(date, "PPP") : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar mode="single" selected={date} onSelect={handleDateChange} initialFocus />
				</PopoverContent>
			</Popover>
		</div>
	);
}
