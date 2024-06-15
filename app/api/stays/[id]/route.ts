import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, CreateStayRequest } from "../../models";

export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<ApiResponse>> {
	const { id } = params;

	try {
		const stay = await prisma.stay.findUnique({
			where: { id },
			include: {
				guest: true,
				room: true,
			},
		});

		if (!stay) {
			return NextResponse.json(
				{ error: true, message: "Stay not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ response: stay, error: false },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: true, message: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<ApiResponse>> {
	const { id } = params;

	try {
		const stay: CreateStayRequest = await request.json();

		if (stay.guest) {
			await prisma.guest.update({
				where: {
					id: stay.guest?.id
				},
				data: stay.guest,
			});
		}

		await prisma.stay.update({
			where: {
				id: id
			},
			data: {
				roomId: stay.room.id,
				guestId: stay.guest.id,
				startDate: new Date(stay.startDate),
				endDate: new Date(stay.endDate),
				checkoutTime: new Date(stay.endDate),
				stayStatus: stay.stayStatus,
				dailyRate: stay.dailyRate,
				weeklyRate: stay.weeklyRate,
				extensions: stay.extensions,
				amountPaid: stay.amountPaid,
				amountDue: stay.amountDue,
				totalCharge: stay.totalCharge,
				numOfAdults: stay.numOfAdults,
				numOfChildren: stay.numOfChildren,
				paymentMode: stay.paymentMode,
				// relatedStayId: stay.relatedStayId // relatedStay shouldn't be changed when editting stay
			},
		});

		return NextResponse.json(
			{ response: stay, error: false },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: true, message: "Internal server error" },
			{ status: 500 }
		);
	}
}
