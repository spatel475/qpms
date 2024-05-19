"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

const phoneNumberSchema = z
	.string()
	.optional()
	.refine(
		(value) => {
			if (!value) return true; // Allow empty values (optional)
			return /^(?:[0-9-()/.]\s?){6,12}[0-9]{1}$/.test(value); // Validate format if value is present
		},
		{ message: "Invalid phone number format." }
	);

export const formSchema = z.object({
	id: z.string().optional(),
	firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
	lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
	dlNumber: z.string().min(2, { message: "ID must be at least 2 characters." }),
	phoneNumber: phoneNumberSchema,
	address: z.string().optional(),
	comments: z.string().max(500).optional(),
});

export type GuestFormValues = z.infer<typeof formSchema>;

interface GuestFormProps {
	guestData: GuestFormValues;
	onChange: (data: GuestFormValues) => void;
}

export function GuestForm({ guestData, onChange }: GuestFormProps) {
	const form = useForm<GuestFormValues>({
		resolver: zodResolver(formSchema),
		mode: "onTouched",
		defaultValues: guestData,
	});

	useEffect(() => {
		form.reset(guestData);
	}, [guestData, form]);

	useEffect(() => {
		const subscription = form.watch((values) => {
			onChange(values as GuestFormValues);
		});
		return () => subscription.unsubscribe();
	}, [form, onChange]);

	return (
		<Form {...form}>
			<form className="space-y-8">
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name *</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.firstName?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name *</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.lastName?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="dlNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Driver License / ID Number *</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.dlNumber?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input {...field} type="tel" />
							</FormControl>
							<FormMessage>{form.formState.errors.phoneNumber?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Address</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.address?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="comments"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Comments</FormLabel>
							<FormControl>
								<Textarea {...field} placeholder="Notes about guest or stay" className="resize-y max-h-[10rem]" maxLength={500} />
							</FormControl>
							<FormMessage>{form.formState.errors.comments?.message}</FormMessage>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
