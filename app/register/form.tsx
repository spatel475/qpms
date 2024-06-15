"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { post } from "@/lib/fetch";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

export default function RegisterForm() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const fname = formData.get("first-name");
		const lname = formData.get("last-name");

		const response = await post(`/auth/register`, {
			email: formData.get("email"),
			password: formData.get("password"),
			name: `${fname} ${lname}`,
		});
		console.log({ response });
	};
	return (
		<form onSubmit={handleSubmit} className="flex items-center justify-center">
			<Card className="mx-auto max-w-sm">
				<CardHeader className="flex items-center">
					<Image src="qpms-logo-black-transparent.svg" height={100} width={100} className="mb-2" alt="QPMS Logo" />
					<CardTitle className="text-3xl font-normal">Sign Up</CardTitle>
					<CardDescription>Enter your information to create an account</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="first-name">First name</Label>
								<Input name="first-name" placeholder="Max" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="last-name">Last name</Label>
								<Input name="last-name" placeholder="Robinson" required />
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input name="email" type="email" placeholder="m@example.com" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input name="password" type="password" />
						</div>
						<Button type="submit" className="w-full">
							Create an account
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link href="/login" className="underline">
							Sign in
						</Link>
					</div>
				</CardContent>
			</Card>
		</form>
	);
}
