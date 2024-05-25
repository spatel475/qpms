import { ProgramItem } from "./types";
import { ProgramOverlaps } from "./interfaces";
export declare function getOverlaps(isVerticalMode: boolean, itemOverlaps: ProgramOverlaps, programs: ProgramItem[]): {
    overlaps: ProgramOverlaps;
    channelOverlaps: Record<string, number>;
};
export declare function checkOverlaps(isMultirowsDnd: boolean, isVerticalMode: boolean, dndChannelUuid: {
    index: number;
    uuid: string;
}, itemOverlaps: ProgramOverlaps, programs: ProgramItem[]): {
    overlaps: ProgramOverlaps;
    channelOverlaps: Record<string, number>;
};
