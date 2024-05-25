import * as React from "react";
import { Mode, Grid as IGrid, HoursInDayDiffTime, GridCell } from "../helpers/interfaces";
import { BaseTimeFormat, ChannelWithPosition, Position } from "../helpers/types";
interface GridProps {
    isVerticalMode: boolean;
    isProgramVisible: (position: Position, overlapsCount: number) => boolean;
    isBaseTimeFormat: BaseTimeFormat;
    channelOverlapsCount: Record<string, number>;
    hourWidth: number;
    dayWidth: number;
    days: string[];
    hoursInDays: HoursInDayDiffTime[];
    months: string[];
    numberOfDays: number;
    numberOfHoursInDay: number;
    numberOfMonths: number;
    offsetStartHoursRange: number;
    gridItems: {
        position: Position;
        channel: ChannelWithPosition;
    }[];
    grid: IGrid;
    mode: Mode;
    sidebarWidth: number;
    timelineHeight: number;
    timelineDividers: number;
    renderGridCell?: (props: GridCell) => React.ReactNode;
}
export declare function Grid({ isVerticalMode, isProgramVisible, channelOverlapsCount, grid, gridItems, mode, hourWidth, timelineDividers, renderGridCell, ...rest }: GridProps): React.JSX.Element;
export {};
