"use client";
import { CurrencyFormat } from "@/lib/currency-utils";
import { useEffect, useReducer } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type TextInputProps = {
	form: UseFormReturn<any>;
	name: string;
	label: string;
	placeholder?: string;
	onValueChange: (value: number) => void;
};

const moneyFormatter = CurrencyFormat;

export default function CurrencyInput(props: TextInputProps) {
	const initialValue = props.form.getValues()[props.name] ? moneyFormatter.format(props.form.getValues()[props.name]) : "";

	const [value, setValue] = useReducer((_: any, next: string) => {
		const digits = next.replace(/\D/g, "");
		return moneyFormatter.format(Number(digits) / 100);
	}, initialValue);

	const formChange = props.form.watch(props.name);
	useEffect(() => {
		const formValue = props.form.getValues()[props.name];
		setValue(moneyFormatter.format(formValue));
		console.log(formValue);
	}, [formChange]);

	function handleChange(realChangeFn: Function, formattedValue: string) {
		const digits = formattedValue.replace(/\D/g, "");
		const realValue = Number(digits) / 100;
		realChangeFn(realValue);
		props.onValueChange(realValue);
	}

	return (
		<FormField
			control={props.form.control}
			name={props.name}
			render={({ field }) => {
				field.value = value;
				const _change = field.onChange;

				return (
					<FormItem>
						<FormLabel>{props.label}</FormLabel>
						<FormControl>
							<Input
								placeholder={props.placeholder}
								type="text"
								{...field}
								onChange={(ev) => {
									setValue(ev.target.value);
									handleChange(_change, ev.target.value);
								}}
								value={value}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
}
