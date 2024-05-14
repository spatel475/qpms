"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object<any>({
	id: z.string().min(1),
	firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
	lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
	address: z.string().min(2, { message: "Address must be at least 2 characters." }),
	phoneNumber: z.string().refine((value) => /^(?:[0-9-()/.]\s?){6,12}[0-9]{1}$/.test(value)),
	dlNumber: z.string().optional(),
	comments: z.string().max(500).optional(),
});

type ProfileFormValues = z.infer<typeof formSchema>;

export function ProfileForm() {
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
	});

	// const { fields, append } = useFieldArray({
	// 	name: "urls",
	// 	control: form.control,
	// });

	function onSubmit(data: ProfileFormValues) {
		console.log(data);
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
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
							<FormMessage />
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
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="dlNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Driver License / ID Number</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
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
								<Textarea placeholder="Notes about guest or stay" className="resize-y max-h-[10rem]" maxLength={500} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* <div>
					{fields.map((field, index) => (
						<FormField
							control={form.control}
							key={field.id}
							name={`urls.${index}.value`}
							render={({ field }) => (
								<FormItem>
									<FormLabel className={cn(index !== 0 && "sr-only")}>URLs</FormLabel>
									<FormDescription className={cn(index !== 0 && "sr-only")}>Add links to your website, blog, or social media profiles.</FormDescription>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ value: "" })}>
						Add URL
					</Button>
				</div> */}
				{/* <Button type="submit" onClick={() => form.handleSubmit(onSubmit)}>
					Update profile
				</Button> */}
			</form>
		</Form>
	);
}
