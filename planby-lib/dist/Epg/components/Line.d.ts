import * as React from "react";
import { HoursInDayDiffTime, Line as ILine, Timezone } from "../helpers/interfaces";
import { DateTime } from "../helpers/types";
interface LineProps {
    isTimeline: boolean;
    isVerticalMode: boolean;
    height: number;
    startDate: DateTime;
    endDate: DateTime;
    dayWidth: number;
    hourWidth: number;
    sidebarWidth: number;
    liveRefreshTime: number;
    hoursInDays: HoursInDayDiffTime[];
    timezone: Timezone;
    renderLine?: (v: ILine) => React.ReactNode;
}
export declare function Line({ isTimeline, isVerticalMode, height, renderLine, ...rest }: LineProps): React.JSX.Element | null;
export {};
