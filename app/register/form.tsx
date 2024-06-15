"use client";
import { post } from "@/lib/fetch";
import { FormEvent } from "react";

export default function RegisterForm() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const response = await post(`/auth/register`, {
			email: formData.get("email"),
			password: formData.get("password"),
		});
		console.log({ response });
	};
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
			<input name="email" className="border border-black text-black" type="email" />
			<input name="password" className="border border-black  text-black" type="password" />
			<button type="submit">Register</button>
		</form>
	);
}
