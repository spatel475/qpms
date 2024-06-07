import { getPaginationInfo, getPaginationResponseHeaders } from "@/lib/api-utils.ts/pagination";
import prisma from "@/prisma/db";
import { NextResponse } from "next/server";
import { DailyReportRecord } from "../models";

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
	const url = new URL(request.url);
	const params = Object.fromEntries(url.searchParams.entries());

	const {
		page = '1',
		limit = '50',
		date,
	} = params;

	let queryDate = new Date();
	if (date) {
		queryDate = new Date(date);
	}

	const data = await prisma.$queryRaw<DailyReportRecord[]>`
    SELECT 
		r."id" AS "roomId",
		s."startDate",
		s."endDate",
		CASE 
			WHEN s."paymentMode" = 'credit' THEN s."totalCharge"
			ELSE NULL
		END AS credit,
		CASE 
			WHEN s."paymentMode" = 'cash' THEN s."totalCharge"
			ELSE NULL
		END AS cash,
		CASE 
			WHEN s."dailyRate" IS NOT NULL THEN 'Daily'
			WHEN s."weeklyRate" IS NOT NULL THEN 'Weekly'
			ELSE ''
		END AS "rateType"
    FROM 
		"Room" r
	LEFT JOIN 
		"Stay" s ON r."id" = s."roomId" AND
		s."startDate" BETWEEN 
		date_trunc('day', ${queryDate.toISOString()}::timestamp - interval '1 day') + interval '12 hours' AND
        date_trunc('day', ${queryDate.toISOString()}::timestamp) + interval '12 hours'   
    ORDER BY 
      r."id", s."startDate";
  `;

	const totalRecords = data.length;
	const { pageInt, limitInt, skip, take, totalPages } = getPaginationInfo({ page, limit, totalRecords });
	const headers = getPaginationResponseHeaders(totalRecords, totalPages, pageInt, limitInt);

	return NextResponse.json(data, { headers });
}
