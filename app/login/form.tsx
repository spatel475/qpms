"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginForm() {
	const router = useRouter();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const response = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false,
		});

		console.log({ response });
		if (!response?.error) {
			router.push("/");
			router.refresh();
		}
	};
	return (
		<form onSubmit={handleSubmit} className="flex items-center justify-center">
			<Card className="w-full max-w-sm">
				<CardHeader className="flex items-center">
					<Image src="qpms-logo-black-transparent.svg" height={100} width={100} className="mb-2" alt="QPMS Logo"/>
					<CardTitle className="text-3xl font-normal">Login</CardTitle>
					<CardDescription>Enter your email below to login to your account.</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input name="email" type="email" placeholder="ab@example.com" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input name="password" type="password" required />
					</div>
				</CardContent>
				<CardFooter className="flex flex-col">
					<Button className="w-full">Sign in</Button>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{" "}
						<Link href="/register" className="underline">
							Sign up
						</Link>
					</div>
				</CardFooter>
			</Card>
		</form>
	);
}
