import { Guest, Room } from "../models/models";

export type DailyReportRecord = {
	roomId: string,
	startDate: Date,
	endDate: Date,
	credit: number,
	cash: number,
	rateType: string
};

export type StayResponse = StayBase & {
	id: string
	guestId: string
	roomId: string
	guest: Guest
	room: Room
}

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

export type Credentials = {
	email: string;
	password: string;
}