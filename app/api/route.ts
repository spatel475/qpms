import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
	const prisma = new PrismaClient()
	// prisma.
	return new Response("API ");
}