/// <reference types="react" />
import { Timeline as ITimeline } from "../helpers/interfaces";
declare type UseTimelineProps = ITimeline;
export declare function useTimeline(props: UseTimelineProps): {
    isWeekMonthMode: boolean;
    isMonthMode: boolean;
    isTodayInHoursInDays: boolean;
    areHoursInDays: boolean;
    time: (string | number)[];
    weekDayWidth: number;
    monthsWidth: {
        width: number;
        left: number;
    }[];
    timelineHeight: number;
    dividers: any[];
    timelineDividers: number;
    formatWeekMonthDate: (date: string) => string;
    getTime: (index: number | string) => {
        time: string;
        isNewDay: boolean;
    };
    getDayMonthName: (date: string) => string;
    getTimelineProps: () => {
        isSidebar: boolean;
        isVerticalMode: boolean | undefined;
        dayWidth: number;
        sidebarWidth: number;
        timelineHeight: number;
    };
    getCurrentTimeProps: () => {
        isBaseTimeFormat: boolean;
        isVerticalMode: boolean | undefined;
        isRTL: boolean | undefined;
        timezone: import("../helpers").Timezone;
        mode: import("../helpers").Mode;
        startDate: import("../helpers/types").DateTime;
        endDate: import("../helpers/types").DateTime;
        hoursInDays: import("../helpers").HoursInDayDiffTime[];
        dayWidth: number;
        timelineHeight: number;
        hourWidth: number;
        sidebarWidth: number;
        liveRefreshTime: number;
        renderCurrentTime: ((v: import("../helpers").CurrentTimeIndicator) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any> | null) | (new (props: any) => import("react").Component<any, any, any>)>) | undefined;
    };
};
export {};
