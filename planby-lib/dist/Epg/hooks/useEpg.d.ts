import React from "react";
import { Area, ChannelWithOmittedUuid, DragAndDrop, Grid, HoursInDay, Mode, Overlap, ProgramOverlaps, ProgramWithOmittedUuid, Snap, Theme, Timezone } from "../helpers/interfaces";
import { DateTime, BaseTimeFormat, Position, InitialScrollPositions, ProgramItem, DragMouseUp, ResizeMouseUp, ChannelWithPosition } from "../helpers/types";
interface useEpgProps {
    isVerticalMode?: boolean;
    isRTL?: boolean;
    isBaseTimeFormat?: BaseTimeFormat;
    isSidebar?: boolean;
    isTimeline?: boolean;
    isLine?: boolean;
    isCurrentTime?: boolean;
    isInitialScrollToNow?: boolean;
    isResize?: boolean;
    initialScrollPositions?: InitialScrollPositions;
    channels: ChannelWithOmittedUuid[];
    epg: ProgramWithOmittedUuid[];
    width?: number;
    height?: number;
    startDate?: DateTime;
    endDate?: DateTime;
    liveRefreshTime?: number;
    mode?: Mode;
    timezone?: Timezone;
    overlap?: Overlap;
    timelineDividers?: number;
    snap?: Snap;
    grid?: Grid;
    dnd?: DragAndDrop;
    areas?: Area[];
    hoursInDays?: HoursInDay[];
    theme?: Theme;
    globalStyles?: string;
    dayWidth?: number;
    sidebarWidth?: number;
    timelineHeight?: number;
    itemHeight?: number;
    itemOverscan?: number;
    channelMapKey?: string;
    programChannelMapKey?: string;
}
export declare function useEpg(props: useEpgProps): {
    isLayoutBottom: (offset?: number) => boolean;
    isLayoutRight: (offset?: number) => boolean;
    getEpgProps: () => {
        isVerticalMode: boolean;
        isRTL: boolean;
        isSidebar: boolean;
        isLine: boolean;
        isTimeline: boolean;
        width: number | undefined;
        height: number | undefined;
        sidebarWidth: number;
        timelineHeight: number;
        ref: React.RefObject<HTMLDivElement>;
        theme: Theme;
        globalStyles: string | undefined;
    };
    getLayoutProps: () => {
        ref: React.RefObject<HTMLDivElement>;
        numberOfMonths: number;
        numberOfHoursInDay: number;
        monthWidth: number;
        offsetStartHoursRange: number;
        numberOfDays: number;
        days: string[];
        months: string[];
        isVerticalMode: boolean;
        isRTL: boolean;
        isBaseTimeFormat: boolean;
        isSidebar: boolean;
        isTimeline: boolean;
        isLine: boolean;
        isCurrentTime: boolean;
        isProgramVisible: (position: Position, overlapsCount: number) => boolean;
        isChannelVisible: (position: Pick<Position, "top" | "height">) => boolean;
        isTimelineVisible: (position: Pick<Position, "left" | "width">) => boolean;
        isToday: boolean;
        isResize: boolean;
        programs: {
            position: {
                width: number;
                height: number;
                top: number;
                left: number;
                edgeEnd: number;
            };
            data: {
                since: string;
                till: string;
                channelUuid: string;
                id: string;
                index: number;
                title: string;
                description: string;
                image: string;
                channelIndex: number;
                channelPosition: Pick<Position, "top" | "height">;
                fixedVisibility?: boolean | undefined;
                parentChannelUuid?: string | undefined;
            };
        }[];
        programOverlaps: ProgramOverlaps;
        channels: ChannelWithPosition[];
        channelOverlapsCount: Record<string, number>;
        layerOverlapLevel: number;
        snap: Snap | undefined;
        grid: Grid;
        gridItems: {
            position: {
                top: number;
                left: number;
                width: number;
                height: number;
                edgeEnd: number;
            };
            channel: ChannelWithPosition;
        }[];
        dnd: DragAndDrop;
        startDate: DateTime;
        endDate: DateTime;
        hoursInDays: import("../helpers").HoursInDayDiffTime[];
        liveRefreshTime: number;
        scrollY: number;
        dayWidth: number;
        hourWidth: number;
        sidebarWidth: number;
        timelineHeight: number;
        itemHeight: number;
        currentDate: string;
        mode: {
            type: "day" | "week" | "month";
            style?: "default" | "modern" | undefined;
        };
        timezone: {
            enabled: boolean;
            zone: string;
            mode: string;
        };
        timelineDividers: number;
        overlapMode: "stack" | "layer";
        overlap: {
            enabled: boolean;
            mode: "stack" | "layer";
            layerOverlapLevel?: number | undefined;
        };
        areas: Area[];
        openChannelGroupTree: (data: ChannelWithPosition) => void;
        onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent> & {
            target: Element;
        }) => void;
        dragMouseUp: (props: DragMouseUp) => Promise<void>;
        resizeMouseUp: (props: ResizeMouseUp) => void;
    };
    getLayoutData: (events: ProgramItem[]) => {
        [x: string]: any;
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
        fixedVisibility?: boolean | undefined;
        parentChannelUuid?: string | undefined;
    }[];
    getDropItemData: (data: ProgramWithOmittedUuid) => {
        since: string;
        till: string;
        channelUuid?: string | undefined;
        id: string;
        title: string;
        image: string;
    };
    onScrollToNow: () => void;
    onScrollTop: (value?: number) => void;
    onScrollLeft: (value?: number) => void;
    onScrollRight: (value?: number) => void;
    scrollY: number;
    scrollX: number;
};
export {};
