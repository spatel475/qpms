import { format } from "date-fns";
// import { v4 as uuidv4 } from "uuid";
import { Channel, Program } from "planby";

import stays from '@/lib/stays.json';
import data from '@/prisma/seed.json';

export const getToday = ({
	date = "2022-04-19",
	formatType = "yyyy-MM-dd",
} = {}) => format(new Date(date), formatType);

const TIME_FORMAT = {
	DEFAULT: "yyyy-MM-dd HH:mm:ss",
};

// function generateMonthModeData(
// 	startDate: string,
// 	endDate: string,
// 	channelId: string
// ) {
// 	const objects = [];

// 	const start = new Date(startDate);
// 	const end = new Date(endDate);

// 	while (start < end) {
// 		const numMonths = faker.datatype.number({ min: 1, max: 5 });
// 		const since = startOfDay(
// 			new Date(start.getFullYear(), start.getMonth(), 1, 0, 0, 0)
// 		);
// 		const till = endOfDay(
// 			new Date(start.getFullYear(), start.getMonth() + numMonths, 0, 23, 59, 59)
// 		);
// 		const obj = {
// 			id: Math.random(),
// 			description: faker.hacker.phrase(),
// 			title: faker.name.jobArea(),
// 			since: format(since, TIME_FORMAT.DEFAULT).replace(" ", "T"),
// 			till: format(till, TIME_FORMAT.DEFAULT).replace(" ", "T"),
// 			channelUuid: channelId,
// 			image: faker.image.technics(),
// 		};
// 		objects.push(obj);

// 		start.setMonth(start.getMonth() + numMonths);
// 	}

// 	return objects;
// }

// // Month
// export const getMonthResources = (startDate: string, endDate: string) => {
// 	const channels = epgChannels;

// 	const monthData = channels.flatMap(({ uuid }) =>
// 		generateMonthModeData(startDate, endDate, uuid)
// 	);

// 	return { channels: channels, epg: monthData };
// };

function generateWeekModeData(
	startDate: string,
	endDate: string,
	channelId: string
): Program[] {

	const objects: Program[] = [];
	const y = stays.filter(s => s.roomId === channelId)
	const x: Program[] = y.map(stay => ({
		id: stay.id,
		channelUuid: channelId,
		description: 'description',
		title: stay.guest.firstName + ' ' + stay.guest.lastName,
		image: '',
		since: stay.startDate,
		till: stay.endDate

	}))
	const start = new Date(startDate);
	const end = new Date(endDate);
	// console.log(x)

	// while (start < end) {
		// const numDays = faker.datatype.number({ min: 1, max: 10 });
		// const since = startOfDay(
		// 	new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0)
		// );

		// const till = endOfDay(
		// 	new Date(
		// 		start.getFullYear(),
		// 		start.getMonth(),
		// 		start.getDate() + numDays - 1,
		// 		23,
		// 		59,
		// 		59
		// 	)
		// );

		// const obj = {
		// 	id: (Math.random() * 100).toFixed(),
		// 	description: faker.hacker.phrase(),
		// 	title: faker.name.jobArea(),
		// 	since: format(since, TIME_FORMAT.DEFAULT).replace(" ", "T"),
		// 	till: format(till, TIME_FORMAT.DEFAULT).replace(" ", "T"),
		// 	channelUuid: channelId,
		// 	image: faker.image.url(),
		// };
		// objects.push(obj);

		// start.setDate(start.getDate() + numDays);
	// }

	return x;
}

// Week
export const getWeekResources = (startDate: string, endDate: string) => {
	// const channels: Channel[] = epgChannels.map((e) => (
	// 	{ ...e, position: { top: 0, height: 0 } }
	// ));

	const channels: Channel[] = data.rooms.map(room => ({
		uuid: room.id,
		title: room.id,
		position: { top: 0, height: 0 },
		logo: ''
	}))

	const weekData = channels.flatMap(({ uuid }) =>
		generateWeekModeData(startDate, endDate, uuid)
	);

	return { channels: channels, epg: weekData };
};

export const getResources = (
	startDate: string,
	endDate: string,
	type: "week" | "month"
) => {
	// if (type === "month") return getMonthResources(startDate, endDate);

	const data = getWeekResources(startDate, endDate);
	return data;
};
