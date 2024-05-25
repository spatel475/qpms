import { DateTime, DragMouseUp, ResizeMouseUp } from "./types";
declare type EventProps = Pick<DragMouseUp | ResizeMouseUp, keyof DragMouseUp & keyof ResizeMouseUp>;
declare type EventSinceTill = EventProps & {
    startDate?: DateTime;
    hourWidth: number;
    width?: ResizeMouseUp["width"];
    initialWidth?: ResizeMouseUp["initialWidth"];
};
export declare const calculateItemDragSinceTill: (props: EventSinceTill) => {
    since: string;
    till: string;
};
export declare const getDefaultDragProps: (positionLeft: number) => {
    currentPositionX: number;
    dndEvents: {
        isDragging: boolean;
    };
};
export {};
