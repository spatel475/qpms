import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	const { id } = params;

	try {
		const stay = await prisma.stay.findUnique({
			where: { id },
			include: {
				guest: true,
				room: true,
			},
		});

		if (!stay) {
			return NextResponse.json({ error: "Stay not found" }, { status: 404 });
		}

		return NextResponse.json(stay);
	} catch (error) {
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
