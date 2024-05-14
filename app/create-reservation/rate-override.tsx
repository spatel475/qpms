"use client";
import CurrencyInput from "@/components/ui/currency-input";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type Props = {
	defaultRate: number;
	onValueChange: (value: number) => void;
};

export default function RateOverrideForm(props: Props) {
	const schema = z.object({
		dailyRate: z.coerce.number().min(1, "Minimum rate $1.00"),
	});

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: { dailyRate: props.defaultRate },
		mode: "onTouched",
	});

	useEffect(() => {
		form.reset({ dailyRate: props.defaultRate });
	}, [props.defaultRate, form]);

	const handleCurrencyChange = (value: number) => {
		props.onValueChange(value);
		form.setValue("dailyRate", value, { shouldValidate: true });
	};

	return (
		<Form {...form}>
			<form className="flex flex-col gap-8">
				<CurrencyInput form={form} label="Daily Rate" name="dailyRate" onValueChange={handleCurrencyChange} />
			</form>
		</Form>
	);
}
