import React from "react";
import { Program } from "../helpers/interfaces";
import { Position, ResizeMouseUp } from "../helpers/types";
interface UseResizeProps {
    isVerticalMode: boolean;
    isResize: boolean;
    initialPosition: Omit<Position, "edgeEnd">;
    data: Program;
    dayWidth: number;
    contentHeight: number;
    snapX?: number;
    elementRef: React.RefObject<HTMLDivElement>;
    mouseUpCb: (props: ResizeMouseUp) => void;
}
export declare function useResize({ isResize, isVerticalMode, data, dayWidth, contentHeight, initialPosition, snapX, elementRef, mouseUpCb, }: UseResizeProps): {
    width: number;
    initialWidth: number;
    currentPositionX: number;
    resizeEvents: {
        isResizing: boolean;
        resources: {
            ref: React.RefObject<HTMLDivElement>;
            isResizing: boolean;
        };
        eventsLeft: {
            onTouchStart: (e: React.MouseEvent | React.TouchEvent) => void;
            onTouchEnd: () => void;
            onMouseDown?: undefined;
            onMouseUp?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            left: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        } | {
            onMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
            onMouseUp: () => void;
            onTouchStart?: undefined;
            onTouchEnd?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            left: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        };
        eventsRight: {
            onTouchStart: (e: React.MouseEvent | React.TouchEvent) => void;
            onTouchEnd: () => void;
            onMouseDown?: undefined;
            onMouseUp?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        } | {
            onMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
            onMouseUp: () => void;
            onTouchStart?: undefined;
            onTouchEnd?: undefined;
            isResize: true;
            isVerticalMode: boolean;
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        };
    };
} | {
    currentPositionX: number;
    width: number;
    resizeEvents: {
        isResizing: boolean;
        resources: {
            ref?: undefined;
            isResizing?: undefined;
        };
        eventsLeft: {};
        eventsRight: {};
    };
    initialWidth?: undefined;
};
export {};
