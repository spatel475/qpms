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

	// Pagination
	const pageInt = parseInt(page as string, 10);
	const limitInt = parseInt(limit as string, 10);
	const skip = (pageInt - 1) * limitInt;
	const take = limitInt;
	const totalRecords = await prisma.stay.count();
	const totalPages = Math.ceil(totalRecords / limitInt);

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

	const headers = new Headers();
	headers.append('x-total-count', totalRecords.toString());
	headers.append('x-total-pages', totalPages.toString());
	headers.append('x-current-page', pageInt.toString());
	headers.append('x-page-size', limitInt.toString());
	return NextResponse.json(data, { headers });
}
