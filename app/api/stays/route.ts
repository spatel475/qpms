import { Guest, Room } from '@/app/models/models';
import { getPaginationInfo, getPaginationResponseHeaders } from '@/lib/api-utils.ts/pagination';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const params = Object.fromEntries(url.searchParams.entries());

	const {
		roomId,
		startDate,
		endDate,
		checkoutDate,
		stayStatus,
		guestName,
		page = '1',
		limit = '20',
	} = params;

	const where: any = {};


	if (roomId) {
		where.roomId = roomId;
	}

	if (startDate) {
		where.startDate = {
			gte: new Date(startDate),
		};
	}

	if (checkoutDate) {
		where.checkoutDate = {
			gte: new Date(checkoutDate),
		};
	}

	if (endDate) {
		where.endDate = {
			lte: new Date(endDate),
		};
	}

	if (stayStatus) {
		where.stayStatus = stayStatus;
	}

	if (guestName) {
		where.guest = {
			OR: [
				{
					firstName: {
						contains: guestName,
					},
				},
				{
					lastName: {
						contains: guestName,
					},
				},
			],
		};
	}

	const totalRecords = await prisma.stay.count();
	const { pageInt, limitInt, skip, take, totalPages } = getPaginationInfo({ page, limit, totalRecords })
	const headers = getPaginationResponseHeaders(totalRecords, totalPages, pageInt, limitInt)

	const data = await prisma.stay.findMany({
		where,
		include: {
			guest: true,
			room: true,
		},
		orderBy: {
			startDate: 'desc', // or endDate: 'desc' 
		},
		skip,
		take,
	});

	return NextResponse.json(data, { headers });
}

export type StayResponse = {
	id: string
	guestId: string
	roomId: string
	startDate: string
	endDate: string
	checkoutTime: string
	dailyRate: number
	stayStatus: string
	guest: Guest
	room: Room
}