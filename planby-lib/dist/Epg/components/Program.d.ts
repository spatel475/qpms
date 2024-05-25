import * as React from "react";
import { DragAndDrop, Mode, Program as ProgramType, Snap } from "../helpers/interfaces";
import { BaseTimeFormat, DateTime, DragMouseUp, ResizeMouseUp } from "../helpers/types";
import { ProgramItem } from "../helpers/types";
interface ProgramProps<T> {
    isVerticalMode?: boolean;
    isRTL?: boolean;
    isResize?: boolean;
    isBaseTimeFormat: BaseTimeFormat;
    startDate: DateTime;
    program: T;
    liveRefreshTime: number;
    snap?: Snap;
    mode: Mode;
    dnd: DragAndDrop;
    contentHeight: number;
    dayWidth: number;
    hourWidth: number;
    itemHeight: number;
    dragMouseUp: (data: DragMouseUp) => void;
    resizeMouseUp: (data: ResizeMouseUp) => void;
    onClick?: (v: ProgramType) => void;
}
export declare function Program<T extends ProgramItem>({ isVerticalMode, program, onClick, ...rest }: ProgramProps<T>): React.JSX.Element;
export {};
