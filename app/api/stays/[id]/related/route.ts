import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const stayId = searchParams.get('stayId');
	if (!stayId)
		return;

	try {
		const relatedStays = await prisma.stay.findMany({
			where: {
				OR: [
					{ id: stayId },
					{ relatedStayId: stayId }
				]
			}
		});

		return NextResponse.json(relatedStays);
	} catch (error) {
		return NextResponse.json({ error: 'Error while fetching related stays' });
	}
}
