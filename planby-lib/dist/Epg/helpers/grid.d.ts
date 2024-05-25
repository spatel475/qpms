import { Mode, Grid as IGrid, HoursInDayDiffTime } from "../helpers/interfaces";
import { BaseTimeFormat, ChannelWithPosition, Position } from "./types";
interface ConvertedGridItems {
    isVerticalMode: boolean;
    channels: ChannelWithPosition[];
    mode: Mode;
    dayWidth: number;
    hourWidth: number;
    timelineHeight: number;
    sidebarWidth: number;
    dayWidthResources: {
        numberOfMonths: number;
        numberOfHoursInDay: number;
        monthWidth: number;
        offsetStartHoursRange: number;
    };
    daysResources: {
        numberOfDays: number;
        days: string[];
        months: string[];
    };
}
export declare const getConvertedGridItems: ({ isVerticalMode, channels, dayWidth, hourWidth, timelineHeight, sidebarWidth, mode, dayWidthResources, daysResources, }: ConvertedGridItems) => {
    position: {
        top: number;
        left: number;
        width: number;
        height: number;
        edgeEnd: number;
    };
    channel: ChannelWithPosition;
}[];
interface ClickGridItem {
    isDrop?: boolean;
    isVerticalMode: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    index: number | undefined;
    item: {
        position: Position;
        channel: ChannelWithPosition;
    };
    grid: IGrid;
    mode: Mode;
    dayWidth: number;
    hourWidth: number;
    timelineHeight: number;
    sidebarWidth: number;
    days: string[];
    hoursInDays: HoursInDayDiffTime[];
    months: string[];
    numberOfDays: number;
    numberOfHoursInDay: number;
    numberOfMonths: number;
    offsetStartHoursRange: number;
    timelineDividers: number;
    dataAttributes?: Record<string, string>;
}
export declare const getClickGridItemData: ({ isDrop, isVerticalMode, isBaseTimeFormat, index, item, grid, mode, dayWidth, hourWidth, sidebarWidth, days, hoursInDays, months, numberOfDays, numberOfHoursInDay, numberOfMonths, offsetStartHoursRange, timelineDividers, dataAttributes, }: ClickGridItem) => void;
export {};
