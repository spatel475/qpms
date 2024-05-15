import { getPaginationInfo, getPaginationResponseHeaders } from "@/lib/api-utils.ts/pagination";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

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