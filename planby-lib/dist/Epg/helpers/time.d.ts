import { HoursInDay, HoursInDayDiffTime, Mode } from "./interfaces";
import { DateTime as DateRangeTime } from "./types";
declare type DateTime = number | string | Date;
export declare const getLiveStatus: (since: DateTime, till: DateTime) => boolean;
export declare const formatTime: (date: DateTime) => string;
export declare const formatTimeTz: (date: DateTime) => string;
export declare const roundToMinutes: (date: DateTime) => Date;
export declare const isYesterday: (since: DateTime, startDate: DateTime) => boolean;
export declare const isFutureTime: (date: DateTime) => boolean;
export declare const getTimeRangeDates: (startDate: DateRangeTime, endDate: DateRangeTime) => {
    startDate: DateRangeTime;
    endDate: DateRangeTime;
};
interface FormatWeekMonthDate {
    date: string;
    mode: Mode;
    isBaseTimeFormat: boolean;
}
export declare const getFormattedWeekMonthDate: ({ date, mode, isBaseTimeFormat, }: FormatWeekMonthDate) => string;
interface NumberOfHoursInDays {
    startDate: DateRangeTime;
    customHoursInDays: HoursInDay[];
}
export declare const getNumberOfHoursInDays: ({ startDate, customHoursInDays, }: NumberOfHoursInDays) => HoursInDayDiffTime[];
export declare const getTodayHoursInDays: (hoursInDays: HoursInDayDiffTime[]) => boolean;
interface HoursInDaysPositionX {
    hoursInDays: HoursInDayDiffTime[];
    hourWidth: number;
    sidebarWidth: number;
    cb?: (v: boolean) => void;
}
export declare const getHoursInDaysPositionX: ({ hoursInDays, hourWidth, sidebarWidth, cb, }: HoursInDaysPositionX) => number;
export {};
