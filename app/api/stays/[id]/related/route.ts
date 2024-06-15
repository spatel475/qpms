import { ApiResponse } from "@/app/api/models";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<ApiResponse>> {
	const { id } = params;
	if (!id)
		return NextResponse.json(
			{ response: [], error: true, message: 'Id required' },
			{ status: 400 }
		);

	try {
		const relatedStays = await prisma.stay.findMany({
			where: {
				OR: [
					{ id: id },
					{ relatedStayId: id }
				]
			},
			include: {
				guest: true,
				room: true
			}
		});
		return NextResponse.json(
			{ response: relatedStays, error: false },
			{ status: 200 }
		);
	} catch (error) {
		console.log('Error while fetching related stays:', error);
		return NextResponse.json(
			{ error: true, message: 'Error while fetching related stays' },
			{ status: 500 }
		);
	}
}
