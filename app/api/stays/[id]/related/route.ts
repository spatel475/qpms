import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	const { id } = params;
	if (!id)
		return NextResponse.json([]);

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
		return NextResponse.json(relatedStays);
	} catch (error) {
		return NextResponse.json({ error: 'Error while fetching related stays' });
	}
}
