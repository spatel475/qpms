import { ApiResponse } from "@/app/api/models";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<ApiResponse>> {
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

		return NextResponse.json(
			{ response: stay, error: false },
			{ status: 200 });
	} catch (error) {
		console.warn('Error while updating room status:', error)
		return NextResponse.json(
			{ error: true, message: "Internal server error" },
			{ status: 500 }
		);
	}
}
