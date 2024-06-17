export type Property = {
	propCode: string;
	name: string;
}

export type User = {
	id: string;
	email: string;
	name: string;
	role: string;
}

export type Guest = {
	id?: string;
	firstName: string;
	lastName: string;
	dlNumber: string;
	address?: string;
	phoneNumber?: string;
	comments?: string;
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

export type DailyReportRecord = {
	roomId: string,
	startDate: Date,
	endDate: Date,
	credit: number,
	cash: number,
	rateType: string
};

export type StayBase = {
	startDate: Date
	endDate: Date
	checkoutTime?: Date
	dailyRate?: number | null
	weeklyRate?: number | null
	amountDue?: number
	amountPaid?: number
	totalCharge?: number
	paymentMode: string
	numOfAdults?: number
	numOfChildren?: number
	stayStatus: string
	extensions: number
	relatedStayId?: string
}

export type CreateStayRequest = StayBase & {
	guest: Guest
	room: Room
}

export type StayResponse = StayBase & {
	id: string
	guestId: string
	roomId: string
	guest: Guest
	room: Room
}

export type Credentials = {
	email: string;
	password: string;
}

export type ApiResponse<T = any> = {
	response?: T,
	error: boolean,
	message?: string
}

export enum StayStatus {
	RESERVED = 'RESERVED',
	OCCUPIED = 'OCCUPIED',
	CHECKED_OUT = 'CHECKED_OUT'
}

export type StaysFilter = {
	startDate?: Date;
	endDate?: Date;
	stayStatus?: StayStatus[];
	guestName?: string;
};

export type Pagination = {
	totalCount: number;
	totalPages: number;
	pageSize: number;
	currentPage: number;
};