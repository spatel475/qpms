import { useLayoutEffect } from "react";
import { HoursInDayDiffTime, Mode, Overlap, ProgramOverlaps } from "./interfaces";
import { ProgramItem } from "./types";
declare type DateTime = string | number | Date;
declare type OmitObjectType = {
    [key: string]: any;
};
export declare const omit: (obj: OmitObjectType, ...props: string[]) => {
    [x: string]: any;
};
export declare const generateArray: (num: number) => any[];
interface OverlapProgramOptions {
    isVerticalMode: boolean;
    program: ProgramItem;
    programOverlaps: ProgramOverlaps;
    layerOverlapLevel: number;
    overlap: Overlap;
    overlapMode: Overlap["mode"];
}
export declare const getProgramOptions: ({ isVerticalMode, program, overlap, ...rest }: OverlapProgramOptions) => {
    position: Pick<import("./types").Position, "width" | "height" | "top" | "left">;
    data: import("./interfaces").Program;
};
export declare const useIsomorphicLayoutEffect: () => typeof useLayoutEffect;
export declare const getHourWidth: (dayWidth: number) => number;
export declare const getDate: (date: DateTime) => Date;
interface DayWidth {
    dayWidth: number;
    startDate: DateTime;
    endDate: DateTime;
    hoursInDays: HoursInDayDiffTime[];
    modeType: Mode["type"];
}
export declare const getDayWidthResources: ({ dayWidth, startDate, endDate, hoursInDays, modeType, }: DayWidth) => {
    hourWidth: number;
    dayWidth: number;
    numberOfMonths: number;
    numberOfHoursInDay: number;
    monthWidth: number;
    offsetStartHoursRange: number;
};
export declare const getDayResources: ({ startDate, endDate, modeType, }: Pick<DayWidth, "startDate" | "endDate" | "modeType">) => {
    isToday: boolean;
    currentDate: string;
    numberOfDays: number;
    days: string[];
    months: string[];
};
export declare const switchPosition: (programPosition: ProgramItem["position"]) => {
    top: number;
    left: number;
    width: number;
    height: number;
};
export declare function generateUUID(): string;
export {};
