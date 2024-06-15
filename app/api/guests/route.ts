import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { ApiResponse } from '../models';

const prisma = new PrismaClient();

export async function GET(request: Request): Promise<NextResponse<ApiResponse>> {
	const { searchParams } = new URL(request.url);
	const search = searchParams.get('search');

	if (!search) {
		return NextResponse.json(
			{ response: [], error: true, errorMessage: 'Search param missing' },
			{ status: 400 }
		);
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

		return NextResponse.json(
			{ response: guests, error: false },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ error: true, message: 'Server error' }, { status: 500 });
	}
}
