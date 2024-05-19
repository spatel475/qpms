import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
	const { id } = params;

	try {
		const data: { newStayStatus: string } = await request.json();
		const stay = await prisma.stay.update({
			where: {
				id: id
			},
			data: {
				stayStatus: data.newStayStatus
			},
		});

		return NextResponse.json(stay);
	} catch (error) {
		console.warn(error)
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
