import React from "react";
import { DragAndDrop, Mode, Snap } from "../helpers/interfaces";
import { ProgramItem, BaseTimeFormat, DragMouseUp, ResizeMouseUp, DateTime } from "../helpers/types";
interface useProgramProps<T> {
    isVerticalMode?: boolean;
    isRTL?: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    isResize?: boolean;
    startDate: DateTime;
    contentHeight: number;
    dayWidth: number;
    hourWidth: number;
    program: T;
    liveRefreshTime: number;
    minWidth?: number;
    itemHeight: number;
    snap?: Snap;
    mode: Mode;
    dnd: DragAndDrop;
    dragMouseUp: (data: DragMouseUp) => void;
    resizeMouseUp: (data: ResizeMouseUp) => void;
}
export declare function useProgram<T extends ProgramItem>({ isVerticalMode, isRTL, isResize, isBaseTimeFormat, startDate, contentHeight, dayWidth, itemHeight, hourWidth, minWidth, program, liveRefreshTime, mode, snap, dnd, dragMouseUp, resizeMouseUp, }: useProgramProps<T>): {
    isMouseEvent: boolean;
    isLive: boolean;
    isMinWidth: boolean;
    isRTL: boolean;
    resizeEvents: {
        isResizing: boolean;
        resources: {
            ref: React.RefObject<HTMLDivElement>;
            isResizing: boolean;
        };
        eventsLeft: {
            onTouchStart: (e: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => void;
            onTouchEnd: () => void;
            onMouseDown?: undefined;
            onMouseUp?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            left: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        } | {
            onMouseDown: (e: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => void;
            onMouseUp: () => void;
            onTouchStart?: undefined;
            onTouchEnd?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            left: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        };
        eventsRight: {
            onTouchStart: (e: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => void;
            onTouchEnd: () => void;
            onMouseDown?: undefined;
            onMouseUp?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        } | {
            onMouseDown: (e: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => void;
            onMouseUp: () => void;
            onTouchStart?: undefined;
            onTouchEnd?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        };
    } | {
        isResizing: boolean;
        resources: {
            ref?: undefined;
            isResizing?: undefined;
        };
        eventsLeft: {};
        eventsRight: {};
    };
    formatTime: (date: string | number | Date, formatType?: string) => string;
    set12HoursTimeFormat: () => string;
    getMouseEvents: () => {
        isDragging: boolean;
        ref: React.RefObject<HTMLDivElement>;
        isResizing: boolean;
    } | {
        onTouchStart: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => void;
        onTouchEnd: () => Promise<void>;
        onMouseDown?: undefined;
        onMouseUp?: undefined;
        isDragging: boolean;
        ref: React.RefObject<HTMLDivElement>;
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        isResizing: boolean;
    } | {
        onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => void;
        onMouseUp: () => Promise<void>;
        onTouchStart?: undefined;
        onTouchEnd?: undefined;
        isDragging: boolean;
        ref: React.RefObject<HTMLDivElement>;
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        isResizing: boolean;
    } | {
        isDragging: boolean;
        ref?: undefined;
        isResizing?: undefined;
    } | {
        onTouchStart: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => void;
        onTouchEnd: () => Promise<void>;
        onMouseDown?: undefined;
        onMouseUp?: undefined;
        isDragging: boolean;
        ref: React.RefObject<HTMLDivElement>;
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        isResizing?: undefined;
    } | {
        onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => void;
        onMouseUp: () => Promise<void>;
        onTouchStart?: undefined;
        onTouchEnd?: undefined;
        isDragging: boolean;
        ref: React.RefObject<HTMLDivElement>;
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        isResizing?: undefined;
    };
    getMouseEventTempTime: () => {
        since: string;
        till: string;
    };
    getRTLSinceTime: (since: string | number | Date) => string | number | Date;
    getRTLTillTime: (till: string | number | Date) => string | number | Date;
    styles: {
        width: number;
        position: {
            [x: string]: any;
        };
    };
};
export {};
