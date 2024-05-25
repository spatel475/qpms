import { DragAndDrop, Mode, Overlap } from "../helpers/interfaces";
declare type Overrides = {
    [key: string]: any;
};
export declare function getLayoutProps(overrides?: Overrides, sliceNumber?: number): {
    isToday: boolean;
    isSidebar: boolean;
    isTimeline: boolean;
    isLine: boolean;
    isBaseTimeFormat: boolean;
    isProgramVisible: () => boolean;
    isChannelVisible: () => boolean;
    isTimelineVisible: () => boolean;
    programs: {
        data: {
            id: any;
            description: any;
            title: any;
            channelUuid: string;
            image: any;
            country: any;
            genre: any;
            rating: any;
            since: string;
            till: string;
            index: number;
            channelIndex: number;
            channelPosition: {
                top: number;
                height: number;
            };
        };
        position: {
            height: any;
            left: any;
            top: any;
            width: any;
        };
    }[];
    channels: {
        position: {
            top: number;
            height: number;
        };
        country: any;
        logo: any;
        provider: number;
        title: any;
        type: any;
        uuid: string;
        year: any;
    }[];
    channelOverlapsCount: {};
    scrollY: number;
    startDate: string;
    endDate: string;
    currentDate: string;
    months: string[];
    numberOfMonths: number;
    monthWidth: number;
    mode: Mode;
    dnd: DragAndDrop;
    hoursInDays: never[];
    areas: never[];
    dayWidth: number;
    hourWidth: number;
    liveRefreshTime: number;
    numberOfHoursInDay: number;
    offsetStartHoursRange: number;
    numberOfDays: number;
    days: string[];
    sidebarWidth: number;
    timelineHeight: number;
    itemHeight: number;
    programOverlaps: {};
    layerOverlapLevel: number;
    overlapMode: "layer" | "stack";
    grid: {
        enabled: boolean;
        hoverHighlight: boolean;
    };
    overlap: Overlap;
    gridItems: {
        channel: {
            country: any;
            logo: any;
            provider: number;
            title: any;
            type: any;
            uuid: string;
            year: any;
            position: {
                top: number;
                height: number;
            };
        };
        position: {
            top: number;
            height: number;
            left: number;
            width: number;
            edgeEnd: number;
        };
    }[];
    onScroll: () => void;
    dragMouseUp: () => null;
};
export declare const getTimeLineProps: (overrides?: Overrides | undefined) => {
    isToday: boolean;
    isCurrentTime: boolean;
    isSidebar: boolean;
    isTimelineVisible: () => boolean;
    isBaseTimeFormat: boolean;
    numberOfHoursInDay: number;
    offsetStartHoursRange: number;
    numberOfDays: number;
    days: string[];
    dayWidth: number;
    hourWidth: number;
    hoursInDays: never[];
    months: string[];
    numberOfMonths: number;
    monthWidth: number;
    sidebarWidth: number;
    timelineHeight: number;
    startDate: string;
    endDate: string;
    liveRefreshTime: number;
    mode: Mode;
};
export declare const getTestTimeDate: (h?: string, m?: string, s?: string) => string;
export {};
