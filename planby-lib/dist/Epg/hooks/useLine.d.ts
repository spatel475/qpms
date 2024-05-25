import { HoursInDayDiffTime, Timezone } from "../helpers/interfaces";
import { DateTime } from "../helpers/types";
interface useLineProps {
    timezone: Timezone;
    startDate: DateTime;
    endDate: DateTime;
    dayWidth: number;
    hourWidth: number;
    sidebarWidth: number;
    hoursInDays: HoursInDayDiffTime[];
    liveRefreshTime: number;
}
export declare function useLine({ timezone, startDate, endDate, hoursInDays, dayWidth, hourWidth, sidebarWidth, liveRefreshTime, }: useLineProps): {
    showLine: boolean;
    positionX: number;
};
export {};
