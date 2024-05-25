import * as React from "react";
import { GridCell } from "../helpers/interfaces";
import { ChannelWithPosition, GridEvent, Position } from "../helpers/types";
interface GridCellItemProps {
    isVerticalMode: boolean;
    isHoverHighlight: boolean | undefined;
    isProgramVisible: (position: Position, overlapsCount: number) => boolean;
    isItemClickable: boolean;
    isDayMode: boolean;
    item: {
        position: Position;
        channel: ChannelWithPosition;
    };
    index: number;
    channelOverlapsCount: Record<string, number>;
    hourWidth: number;
    timelineDividers: number;
    renderGridCell?: (props: GridCell) => React.ReactNode;
    onItemClick: GridEvent;
    onItemDrop: GridEvent;
}
export declare function GridCellItem({ isVerticalMode, isProgramVisible, isHoverHighlight, isDayMode, isItemClickable, item, index, channelOverlapsCount, hourWidth, timelineDividers, renderGridCell, onItemClick, onItemDrop, }: GridCellItemProps): {} | null | undefined;
export {};
