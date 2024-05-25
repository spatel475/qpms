import { MouseEvent } from "react";
import { Program } from "../helpers/interfaces";
import { DragMouseUp, Position } from "../helpers/types";
interface UseDragProps {
    isVerticalMode: boolean;
    isDndEnabled: boolean;
    isDndMutlirows: boolean;
    initialPosition: Omit<Position, "edgeEnd">;
    data: Program;
    dayWidth: number;
    itemHeight: number;
    contentHeight: number;
    dndSnapX?: number;
    dndSnapY?: number;
    elementRef: React.RefObject<HTMLDivElement>;
    mouseUpCb: (props: DragMouseUp) => void;
    dndMouseUpCb?: (props: DragMouseUp, data: Program) => void;
}
export declare function useDrag(props: UseDragProps): {
    currentPositionX: number;
    dndEvents: {
        isDragging: boolean;
    };
} | {
    dndEvents: {
        onTouchStart: (e: MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
        onTouchEnd: () => Promise<void>;
        onMouseDown?: undefined;
        onMouseUp?: undefined;
        isDragging: boolean;
        ref: import("react").RefObject<HTMLDivElement>;
        onClick: (e: MouseEvent<HTMLDivElement>) => void;
    } | {
        onMouseDown: (e: MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
        onMouseUp: () => Promise<void>;
        onTouchStart?: undefined;
        onTouchEnd?: undefined;
        isDragging: boolean;
        ref: import("react").RefObject<HTMLDivElement>;
        onClick: (e: MouseEvent<HTMLDivElement>) => void;
    };
    currentPositionX: number;
};
export {};
