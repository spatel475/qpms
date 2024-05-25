import React from "react";
import { ChannelWithPosition, GridEvent, Position } from "../helpers/types";
interface useGridCellItemProps {
    onItemDrop?: GridEvent;
}
export declare function useGridExternalDnD({ onItemDrop }?: useGridCellItemProps): {
    isDragOver: boolean;
    dropAreaRef: React.MutableRefObject<null>;
    onDrop: (item: {
        position: Position;
        channel: ChannelWithPosition;
    }, index: number) => (e: React.DragEvent<HTMLDivElement>) => void;
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
};
export {};
