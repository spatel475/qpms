import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const primsa = new PrismaClient();
	const data = await primsa.room.findMany();
	return Response.json(data);
}