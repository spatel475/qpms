import { Room } from "@/app/models/models";
import { getPaginationInfo, getPaginationResponseHeaders } from "@/lib/api-utils.ts/pagination";
import prisma from "@/prisma/db";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const params = Object.fromEntries(url.searchParams.entries());

	const {
		page = '1',
		limit = '50',
	} = params;

	const totalRecords = await prisma.room.count();
	const { pageInt, limitInt, skip, take, totalPages } = getPaginationInfo({ page, limit, totalRecords })
	const headers = getPaginationResponseHeaders(totalRecords, totalPages, pageInt, limitInt)

	const data = await prisma.room.findMany({ skip, take });

	return Response.json(data, { headers });
}

export async function PUT(request: NextRequest) {
	const url = new URL(request.url);
	const rooms: Room[] = await request.json();
	console.log("Room Update API:", rooms.length)

	try {
		const updatePromises = rooms.map(room => {
			return prisma.room.updateMany({
				where: { id: room.id },
				data: {
					roomRate: room.roomRate,
					weeklyRoomRate: room.weeklyRoomRate,
					roomAvailable: room.roomAvailable,
					unavailablityReason: room.unavailablityReason,
				},
			});
		});

		const updateResults = await Promise.all(updatePromises);
		const updatedRooms = await prisma.room.findMany({
			where: { id: { in: rooms.map(room => room.id) } }
		});

		return Response.json(updatedRooms);
	} catch (error) {
		console.error("Error updating rooms:", error);
		return Response.json({ error: 'Failed to update rooms' }, { status: 500 });
	}
}