import prisma from "@/prisma/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
	try {
		const { email, password, name, role } = await request.json();
		const parsedCredentials = z
			.object({
				email: z.string().email(),
				password: z.string().min(5),
				name: z.string().min(2),
			})
			.safeParse({ email, password, name });

		if (!parsedCredentials.success) {
			console.log("Invalid request");
			return NextResponse.json({ message: "failure", data: { email, password, name } }, { status: 400 });
		}

		const parsed = parsedCredentials.data;

		const hashedPassword = await hash(parsed.password, 10);
		console.log({ email, hashedPassword });
		
		await prisma.user.create({
			data: {
				email: parsed.email,
				password: hashedPassword,
				name: parsed.name,
				role: role,
			},
		});
	} catch (e) {
		console.log({ e });
		return NextResponse.json({ message: "failure" }, { status: 400 });
	}

	return NextResponse.json({ message: "success" });
}
