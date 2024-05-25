import { CSSProperties } from "react";
import { Layers } from "./enums";
import { BaseTimeFormat, ChannelWithPosition, DateTime, DragMouseUp, GridEvent, Position, ProgramItem } from "./types";
export interface Program {
    channelUuid: string;
    id: string;
    index: number;
    title: string;
    description: string;
    since: string | number | Date;
    till: string | number | Date;
    image: string;
    channelIndex: number;
    channelPosition: Pick<Position, "top" | "height">;
    fixedVisibility?: boolean;
    parentChannelUuid?: string;
    [key: string]: any;
}
export interface ProgramWithOmittedUuid extends Omit<Program, "id"> {
    channelUuid?: string;
}
export interface Channel {
    isOpened?: boolean;
    uuid: string;
    logo: string;
    groupTree?: boolean;
    parentChannelUuid?: string;
    nestedChildren?: string[];
    isNestedChild: boolean;
    isFirstNestedChild?: boolean;
    isLastNestedChild?: boolean;
    [key: string]: any;
}
export interface ChannelWithOmittedUuid extends Omit<Channel, "uuid"> {
    uuid?: string;
}
export interface ProgramOverlaps {
    [key: string]: ProgramItem[];
}
export interface Overlap {
    enabled: boolean;
    mode: "stack" | "layer";
    layerOverlapLevel?: number;
}
export interface Snap {
    x?: number;
    y?: number;
}
export interface GridDataAttributes {
    [key: string]: string;
}
export interface GridItemProps {
    since: string;
    till: string;
    date: string;
    channelUuid: string;
}
export interface GridDividerItemProps {
    index: number;
    item: {
        position: Position;
        channel: ChannelWithPosition;
    };
    dividerProps: {
        styles: {
            left: (index: number) => number;
            width: number;
        };
        props: {
            isVerticalMode: boolean;
            isHoverHighlight: boolean;
            isItemClickable: boolean;
            onItemClick: GridEvent;
            onItemDrop?: GridEvent;
        };
    };
}
export interface GridDropItemProps extends GridItemProps {
    [key: string]: string;
}
export interface Grid {
    enabled: boolean;
    hoverHighlight?: boolean;
    onGridItemClick?: (props: GridItemProps) => void;
    onGridItemDrop?: (props: GridItemProps) => void;
}
export interface GridCell {
    isDayMode: boolean;
    isHoverHighlight?: boolean;
    isDragOver?: boolean;
    id: string;
    index: number;
    item: {
        position: Position;
        channel: ChannelWithPosition;
    };
    timelineDividers: number;
    timelineDividerArray: string[];
    gridDividerProps: {
        styles: {
            left: (index: number) => number;
            width: number;
        };
        props: {
            isVerticalMode: boolean;
            isHoverHighlight: boolean;
            isItemClickable: boolean;
            onItemClick: GridEvent;
        };
    };
    gridItemClickProps: {
        onClick?: () => void;
        isItemClickable: boolean;
    };
    gridItemDnDProps: {
        isDragOver?: undefined;
        onDragEnter?: undefined;
        onDragLeave?: undefined;
        onDrop?: undefined;
    } | {
        isDragOver: boolean;
        onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
        onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
        onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    };
}
export interface DragAndDrop {
    enabled: boolean;
    mode: "row" | "multi-rows";
    onDnDMouseUp?: (event: Pick<DragMouseUp, "since" | "till" | "id">) => void;
    onDnDSuccess?: (event: ProgramWithOmittedUuid) => void;
}
export interface Line {
    isVerticalMode: boolean;
    isTimeline: boolean;
    styles: {
        position: {
            top: number;
            left: number;
            width: number;
            height: number;
            zIndex: Layers;
        };
    };
}
export interface CurrentTimeIndicator {
    isVerticalMode?: boolean;
    isRTL?: boolean;
    isBaseTimeFormat?: boolean;
    time: string;
    styles: {
        position: Omit<Position, "width" | "edgeEnd"> & {
            width: string | number;
        };
    };
}
export interface Timeline {
    isVerticalMode?: boolean;
    isRTL?: boolean;
    isToday: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    isCurrentTime: boolean;
    isSidebar: boolean;
    isTimelineVisible: (position: Pick<Position, "left" | "width">) => boolean;
    timezone: Timezone;
    dayWidth: number;
    hourWidth: number;
    days: string[];
    hoursInDays: HoursInDayDiffTime[];
    months: string[];
    numberOfDays: number;
    numberOfHoursInDay: number;
    numberOfMonths: number;
    offsetStartHoursRange: number;
    monthWidth: number;
    sidebarWidth: number;
    timelineHeight: number;
    startDate: DateTime;
    endDate: DateTime;
    liveRefreshTime: number;
    mode: Mode;
    timelineDividers: number;
    renderCurrentTime?: (v: CurrentTimeIndicator) => React.ReactElement;
}
export interface Mode {
    type: "day" | "week" | "month";
    style?: "default" | "modern";
}
export interface Area {
    startDate: string;
    endDate?: string;
    styles: CSSProperties;
    onClick?: () => void;
    annotations?: {
        styles: CSSProperties;
        textStart?: string;
        textEnd?: string;
    };
}
export interface AreaItem {
    showArea: boolean;
    startDate: Area["startDate"];
    endDate?: Area["endDate"];
    areaBgStyles: Area["styles"];
    onClick?: Area["onClick"];
    annotations?: {
        styles: Area["styles"];
        textStart?: string;
        textEnd?: string;
    };
    areaFieldStyles: {
        positionX: number;
        width: number;
        height: number;
        timelineHeight: number;
    };
}
export interface HoursInDay {
    date: string;
    startTimeHour: string;
    endTimeHour: string;
}
export interface HoursInDayDiffTime extends HoursInDay {
    diffInHours: number;
    prevItemDiffInHours: number;
    diffLeft: number;
    startTime: number;
    endTime: number;
}
export interface Timezone {
    enabled: boolean;
    zone: string;
    mode: string;
}
export interface Theme {
    primary: {
        600: string;
        900: string;
    };
    grey: {
        300: string;
    };
    white: string;
    teal: {
        100: string;
    };
    green: {
        200: string;
        300: string;
    };
    loader: {
        teal: string;
        purple: string;
        pink: string;
        bg: string;
    };
    scrollbar: {
        border: string;
        thumb: {
            bg: string;
        };
    };
    gradient: {
        blue: {
            300: string;
            600: string;
            900: string;
        };
    };
    text: {
        grey: {
            300: string;
            500: string;
        };
    };
    timeline: {
        divider: {
            bg: string;
        };
    };
    grid: {
        item: string;
        divider: string;
        highlight: string;
    };
}
