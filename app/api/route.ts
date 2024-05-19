import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
	const metrics = await prisma.$metrics.json()
	return NextResponse.json(metrics);

}