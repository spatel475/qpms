import * as React from "react";
import { CurrentTimeIndicator, HoursInDayDiffTime, Mode, Timezone } from "../helpers/interfaces";
import { DateTime } from "../helpers/types";
interface CurrentTimeProps {
    isBaseTimeFormat?: boolean;
    isVerticalMode?: boolean;
    isRTL?: boolean;
    timezone: Timezone;
    mode: Mode;
    startDate: DateTime;
    endDate: DateTime;
    hoursInDays: HoursInDayDiffTime[];
    dayWidth: number;
    timelineHeight: number;
    hourWidth: number;
    sidebarWidth: number;
    liveRefreshTime: number;
    renderCurrentTime?: (v: CurrentTimeIndicator) => React.ReactElement;
}
export declare function CurrentTime(props: CurrentTimeProps): React.JSX.Element | null;
export {};
