import { PrismaClient } from '@prisma/client';
import data from './seed.json';

const prisma = new PrismaClient()

async function seedUser() {
	const seed = data.users[0]
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
	await prisma.room.createMany({ data: seed, skipDuplicates: true })
}

async function seedGuests() {
	const seed = data.guests;
	await prisma.guest.createMany({ data: seed, skipDuplicates: true })
}

async function seedStays() {
	const seed = data.stays;
	await prisma.stay.createMany({ data: seed, skipDuplicates: true })
}

const userPromise = seedUser();
const propertyPromise = seedProperty();
const roomsPromise = seedRooms();

Promise.allSettled([userPromise, propertyPromise, roomsPromise, seedGuests(), seedStays()])
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})