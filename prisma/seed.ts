import { PrismaClient, Room } from '@prisma/client'
import data from './seed.json'

const prisma = new PrismaClient()

async function seedUser() {
	const seed = {
		"id": "1",
		"email": "saheeelpatel@gmail.com",
		"name": "Sahil Patel",
		"role": "Admin"
	}
	await prisma.user.upsert({
		where: { email: seed.email },
		update: seed,
		create: seed,
	})
}

async function seedProperty() {
	const seed = data.property[0];
	await prisma.property.upsert(
		{
			where: { propCode: seed.propCode },
			update: seed,
			create: seed,
		}
	)
}

async function seedRooms() {
	const seed = data.rooms;
	await prisma.room.createMany(
		{ data: seed, skipDuplicates: true }
	)
}



seedUser()
	.then(async () => await prisma.$disconnect())
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})

seedProperty()
	.then(async () => await prisma.$disconnect())
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})


seedRooms()
	.then(async () => await prisma.$disconnect())
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})