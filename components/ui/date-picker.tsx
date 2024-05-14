"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, addYears, format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { DateRange } from "react-day-picker";

type Props = {
	onValueChange: (value: DateRange | undefined) => void;
};

export function DatePickerForm(props: Props) {
	const FormSchema = z.object({
		dateRange: z.date().min(addYears(new Date(), 1)).max(addYears(new Date(), 2)),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const [date, setDate] = useState<DateRange | undefined>({ from: new Date(), to: addDays(new Date(), 1) });

	const handleDateChange = (value: DateRange | undefined) => {
		console.warn(value)
		setDate(value);
		props.onValueChange(value);
	};

	return (
		<Form {...form}>
			<form>
				<FormField
					control={form.control}
					name="dateRange"
					render={({ field }) => (
						<FormItem className="flex flex-col mb-6">
							<FormLabel>Select stay duration</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date?.from ? (
											date.to ? (
												<>
													{format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
												</>
											) : (
												format(date.from, "LLL dd, y")
											)
										) : (
											<span>Pick a date</span>
										)}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={handleDateChange} numberOfMonths={2} />
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
