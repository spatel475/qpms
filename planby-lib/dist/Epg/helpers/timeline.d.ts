import { HoursInDayDiffTime, Mode } from "./interfaces";
interface TimeSlots {
    isBaseTimeFormat: boolean;
    days: string[];
    hoursInDays: HoursInDayDiffTime[];
    months: string[];
    numberOfDays: number;
    numberOfHoursInDay: number;
    numberOfMonths: number;
    offsetStartHoursRange: number;
    weekDayWidth?: number;
}
export declare const generateTimelineSlots: (modeType: Mode["type"], options: TimeSlots) => (string | number)[];
export declare const generateWeekTimelineSlots: ({ days, numberOfDays, }: Pick<TimeSlots, "days" | "numberOfDays">) => string[];
export declare const generateMonthTimelineSlots: ({ months, numberOfMonths, }: Pick<TimeSlots, "isBaseTimeFormat" | "months" | "numberOfMonths">) => string[];
export declare const getTimelineMonthsWidth: ({ months, weekDayWidth, }: Pick<TimeSlots, "months" | "weekDayWidth">) => {
    width: number;
    left: number;
}[];
export declare const getTimelineHeight: (timelineHeight: number, mode: Mode) => number;
export {};
