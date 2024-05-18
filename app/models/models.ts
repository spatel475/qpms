export type Guest = {
	id?: string;
	firstName: string;
	lastName: string;
	address: string;
	phoneNumber: string;
	dlNumber?: string;
	comments?: string;
}

export type Property = {
	propCode: string;
	name: string;
}

export type Room = {
	id: string;
	roomType: string; // @todo: change to RoomType enum
	roomRate: number;
	weeklyRoomRate: number;
	propCode: string;
	roomAvailable: boolean;
	unavailablityReason?: string;
}

export type Stay = {
	id?: string;
	guestId: string;
	roomId: string;
	startDate: string;
	endDate: string;
	checkoutTime: string;
	dailyRate: number,
	stayStatus: string,// @todo: change to StayStatus enum
	guest?: Guest
	room?: Room
}

export type User = {
	id: string;
	email: string;
	name: string;
	role: string;
}

// room types:
// F=Full, Q=Queen, K=King, Number=BedCount, S=Smoking, NS=NonSmoking
export enum RoomType {
	F1S = 'F1S',
	F1NS = 'F1NS',
	F2S = 'F2S',
	F2NS = 'F2NS',
	Q1S = 'Q1S',
	Q1NS = 'Q1NS',
	Q2S = 'Q2S',
	Q2NS = 'Q2NS',
	K1S = 'K1S',
	K1NS = 'K1NS'
}

export enum StayStatus {
	BOOKED = 'BOOKED',
	INHOUSE = 'INHOUSE',
	CHECKEDOUT = 'CHECKEDOUT'
}
