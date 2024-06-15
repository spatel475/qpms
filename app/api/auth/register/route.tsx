import prisma from "@/prisma/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ApiResponse } from "../../models";

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
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
			console.log("Invalid request", { parsedCredentials });
			return NextResponse.json(
				{
					error: true,
					errorMessage: "Bad Request",
					data: { email, password, name },
				},
				{ status: 400 }
			);
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
		return NextResponse.json<ApiResponse>(
			{
				error: true,
				message: "failure",
			},
			{ status: 500 }
		);
	}

	return NextResponse.json({ error: false }, { status: 200 });
}
