import { Program, Channel, GridDataAttributes } from "./interfaces";
export declare type Position = {
    width: number;
    height: number;
    top: number;
    left: number;
    edgeEnd: number;
};
export declare type InitialScrollPositions = Pick<Partial<Position>, "top" | "left">;
export declare type ProgramWithPosition = {
    position: Position;
    data: Program;
};
export declare type ProgramItem = {
    position: Omit<Position, "edgeEnd">;
    data: Program;
};
export declare type ChannelItem = {
    isVerticalMode?: boolean;
    isRTL?: boolean;
    channel: ChannelWithPosition;
    onOpenGroupTree?: (data: ChannelWithPosition) => void;
};
export declare type ChannelWithPosition = Channel & {
    position: Pick<Position, "top" | "height"> & Partial<Pick<Position, "left" | "width">>;
    index: number;
};
export declare type DateTime = string | Date;
export declare type BaseTimeFormat = boolean;
export declare type DragMouseUp = Pick<Program, "id" | "index" | "since" | "till"> & Pick<Position, "left" | "top"> & {
    initialPositionLeft: Position["left"];
    initialPositionTop: Position["top"];
};
export declare type ResizeMouseUp = Pick<Program, "id" | "index" | "since" | "till"> & Pick<Position, "left" | "top"> & {
    initialPositionLeft: Position["left"];
    initialPositionTop: Position["top"];
    initialWidth: Position["width"];
    width: Position["width"];
};
export declare type GridEvent = (item: {
    position: Position;
    channel: ChannelWithPosition;
}, index?: number | undefined, ataAttributes?: GridDataAttributes) => () => void;
