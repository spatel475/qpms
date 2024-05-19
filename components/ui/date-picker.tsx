"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

type Props = {
	defaultDates: DateRange | undefined;
	onValueChange: (value: DateRange | undefined) => void;
};

export function DatePickerForm(props: Props) {
	const formSchema = z.object({
		dateRange: z.date(),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const [dateRange, setDateRange] = useState<DateRange | undefined>({ from: undefined, to: undefined });

	useEffect(() => {
		setDateRange(props.defaultDates);
	}, [props.defaultDates]);

	const handleDateChange = (value: DateRange | undefined) => {
		setDateRange(value);
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
									<Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !dateRange && "text-muted-foreground")}>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{dateRange?.from ? (
											dateRange.to ? (
												<>
													{format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
												</>
											) : (
												format(dateRange.from, "LLL dd, y")
											)
										) : (
											<span>Pick a date</span>
										)}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar initialFocus mode="range" defaultMonth={dateRange?.from} selected={dateRange} onSelect={handleDateChange} numberOfMonths={2} />
								</PopoverContent>
							</Popover>
							<FormMessage>{!!dateRange?.from && !!dateRange.to ? "" : "Date range required"}</FormMessage>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
