import { Mode, Grid as IGrid, HoursInDayDiffTime } from "../helpers/interfaces";
import { BaseTimeFormat, ChannelWithPosition, Position } from "../helpers/types";
interface UseGridProps {
    isVerticalMode: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    hourWidth: number;
    dayWidth: number;
    days: string[];
    hoursInDays: HoursInDayDiffTime[];
    months: string[];
    numberOfDays: number;
    numberOfHoursInDay: number;
    numberOfMonths: number;
    offsetStartHoursRange: number;
    grid: IGrid;
    mode: Mode;
    sidebarWidth: number;
    timelineHeight: number;
    timelineDividers: number;
}
export declare function useGrid({ mode, grid, timelineHeight, sidebarWidth, hourWidth, dayWidth, ...rest }: UseGridProps): {
    onItemClick: (item: {
        position: Position;
        channel: ChannelWithPosition;
    }, index?: number | undefined) => () => void;
    onItemDrop: (item: {
        position: Position;
        channel: ChannelWithPosition;
    }, index?: number | undefined, dataAttributes?: Record<string, string> | undefined) => () => void;
};
export {};
