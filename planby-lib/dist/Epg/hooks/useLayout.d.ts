import React from "react";
import { HoursInDayDiffTime } from "../helpers/interfaces";
import { DateTime, InitialScrollPositions } from "../helpers/types";
interface useLayoutProps {
    isVerticalMode: boolean;
    isToday: boolean;
    isInitialScrollToNow: boolean;
    initialScrollPositions: InitialScrollPositions;
    height?: number;
    width?: number;
    hourWidth: number;
    sidebarWidth: number;
    channelsNumber: number;
    startDate: DateTime;
    endDate: DateTime;
    currentDate: string;
    hoursInDays: HoursInDayDiffTime[];
}
export declare function useLayout({ isVerticalMode, isToday, isInitialScrollToNow, initialScrollPositions, height, width, channelsNumber, startDate, endDate, hourWidth, sidebarWidth, hoursInDays, }: useLayoutProps): {
    containerRef: React.RefObject<HTMLDivElement>;
    scrollBoxRef: React.RefObject<HTMLDivElement>;
    scrollX: number;
    scrollY: number;
    layoutWidth: number;
    layoutHeight: number;
    isLayoutBottom: (offset?: number) => boolean;
    isLayoutRight: (offset?: number) => boolean;
    onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent> & {
        target: Element;
    }) => void;
    onScrollToNow: () => void;
    onScrollTop: (value?: number) => void;
    onScrollLeft: (value?: number) => void;
    onScrollRight: (value?: number) => void;
};
export {};
