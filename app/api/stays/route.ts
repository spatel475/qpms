import { Guest } from '@/app/models/models';
import { getPaginationInfo, getPaginationResponseHeaders } from '@/lib/api-utils.ts/pagination';
import prisma from '@/prisma/db';
import { NextRequest, NextResponse } from 'next/server';
import { CreateStayRequest } from '../models';

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const params = Object.fromEntries(url.searchParams.entries());

	const {
		roomId,
		startDate,
		endDate,
		checkoutDate,
		stayStatus: stayStatuses,
		guestName,
		page = '1',
		limit = '25',
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

	if (stayStatuses) {
		where.stayStatus = {
			in: stayStatuses.split(',')
		};
	}

	if (guestName) {
		where.guest = {
			OR: [
				{
					firstName: {
						contains: guestName,
						mode: 'insensitive',
					},
				},
				{
					lastName: {
						contains: guestName,
						mode: 'insensitive',
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
			endDate: 'desc', // or endDate: 'desc' 
		},
		// distinct: ['roomId'],
		skip,
		take,
	});

	return NextResponse.json(data, { headers });
}

export async function POST(request: NextRequest) {
	try {
		const data: CreateStayRequest = await request.json();
		const guest = await upsertGuest(data.guest);

		const stayRequest = await prisma.stay.create({
			data: {
				guest: {
					connect: {
						id: guest.id,
					},
				},
				room: {
					connect: {
						id: data.room.id,
					},
				},
				startDate: new Date(data.startDate),
				endDate: new Date(data.endDate),
				checkoutTime: new Date(data.endDate),
				stayStatus: data.stayStatus,
				dailyRate: data.dailyRate,
				weeklyRate: data.weeklyRate,
				extensions: data.extensions,
				amountPaid: data.amountPaid,
				amountDue: data.amountDue,
				totalCharge: data.totalCharge,
				numOfAdults: data.numOfAdults,
				numOfChildren: data.numOfChildren,
				paymentMode: data.paymentMode,
				relatedStayId: data.relatedStayId
			},
		});

		return NextResponse.json({ status: 201, stay: stayRequest });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: 'Error creating stay request' }, { status: 500 });
	}
}

async function upsertGuest(data: Guest) {
	// Check if guest exists using unique identifier 
	let guest = await prisma.guest.findFirst({
		where: {
			firstName: data.firstName,
			lastName: data.lastName,
			dlNumber: data.dlNumber,
		},
	});

	// If guest does not exist, create a new guest
	if (!guest) {
		guest = await prisma.guest.create({
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				address: data.address,
				phoneNumber: data.phoneNumber,
				dlNumber: data.dlNumber,
				comments: data.comments,
			},
		});
	} else {
		// If guest exists, update the guest's information
		guest = await prisma.guest.update({
			where: {
				id: guest.id,
			},
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				address: data.address,
				phoneNumber: data.phoneNumber,
				dlNumber: data.dlNumber,
				comments: data.comments,
			},
		});
	}

	return guest
}

