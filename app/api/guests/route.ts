import { Guest } from '@/app/models/models';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const search = searchParams.get('search');

	if (!search) {
		return NextResponse.json<Guest[]>([], { status: 400 });
	}

	try {
		const guests = await prisma.guest.findMany({
			where: {
				OR: [
					{
						firstName: {
							contains: search,
							mode: 'insensitive',
						},
					},
					{
						lastName: {
							contains: search,
							mode: 'insensitive',
						},
					},
					{
						phoneNumber: {
							contains: search,
							mode: 'insensitive',
						},
					},
					{
						address: {
							contains: search,
							mode: 'insensitive',
						},
					},
					{
						dlNumber: {
							contains: search,
							mode: 'insensitive',
						},
					},
				],
			},
		});

		if (guests.length === 0) {
			return NextResponse.json({ message: 'No Guest Found' }, { status: 404 });
		}

		return NextResponse.json(guests, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Server error' }, { status: 500 });
	}
}
