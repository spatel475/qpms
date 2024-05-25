import { Channel, ChannelWithOmittedUuid, HoursInDayDiffTime, Mode, Program, ProgramWithOmittedUuid } from "./interfaces";
import { Position, DateTime, ChannelWithPosition } from "./types";
export declare const getPositionX: (since: DateTime, till: DateTime, startDate: DateTime, endDate: DateTime, hourWidth: number) => number;
export declare const getChannelPosition: (channelIndex: number, itemHeight: number) => {
    top: number;
    height: number;
};
export declare const getProgramPosition: (program: Program, channelIndex: number, itemHeight: number, hourWidth: number, startDate: DateTime, endDate: DateTime, isVerticalMode: boolean) => {
    position: {
        width: number;
        height: number;
        top: number;
        left: number;
        edgeEnd: number;
    };
    data: {
        since: string;
        till: string;
        channelUuid: string;
        id: string;
        index: number;
        title: string;
        description: string;
        image: string;
        channelIndex: number;
        channelPosition: Pick<Position, "top" | "height">;
        fixedVisibility?: boolean | undefined;
        parentChannelUuid?: string | undefined;
    };
};
interface ConvertedPrograms {
    isVerticalMode: boolean;
    isOverlapEnabled: boolean;
    programChannelMapKey: string;
    data: ProgramWithOmittedUuid[];
    channels: Channel[];
    startDate: DateTime;
    endDate: DateTime;
    itemHeight: number;
    hourWidth: number;
    hoursInDays: HoursInDayDiffTime[];
}
export declare const getConvertedPrograms: ({ isVerticalMode, isOverlapEnabled, programChannelMapKey, data, channels, startDate, endDate, itemHeight, hourWidth, hoursInDays, }: ConvertedPrograms) => {
    position: {
        width: number;
        height: number;
        top: number;
        left: number;
        edgeEnd: number;
    };
    data: {
        since: string;
        till: string;
        channelUuid: string;
        id: string;
        index: number;
        title: string;
        description: string;
        image: string;
        channelIndex: number;
        channelPosition: Pick<Position, "top" | "height">;
        fixedVisibility?: boolean | undefined;
        parentChannelUuid?: string | undefined;
    };
}[];
export declare const getConvertedChannels: (isOverlapEnabled: boolean, overlapMode: string, layerOverlapLevel: number, channels: ChannelWithOmittedUuid[], itemHeight: number, channelMapKey: string, channelOverlapsCount: Record<string, number>) => ChannelWithPosition[];
interface ItemVisibility {
    position: Position;
    scrollY: number;
    scrollX: number;
    containerHeight: number;
    containerWidth: number;
    isVerticalMode: boolean;
    itemOverscan: number;
    overlapsCount: number;
}
export declare const getItemVisibility: ({ position, scrollY, scrollX, containerHeight, containerWidth, itemOverscan, overlapsCount, isVerticalMode, }: ItemVisibility) => boolean;
interface SidebarItemVisibility {
    isVerticalMode: boolean;
    itemOverscan: number;
    position: Pick<Position, "top" | "height"> & Partial<Pick<Position, "left">>;
    scrollX: number;
    scrollY: number;
    containerHeight: number;
    containerWidth: number;
}
export declare const getSidebarItemVisibility: ({ position, scrollX, scrollY, containerHeight, containerWidth, itemOverscan, isVerticalMode, }: SidebarItemVisibility) => boolean;
interface TimelineItemVisibility {
    position: Pick<Position, "left" | "width">;
    scrollY: number;
    scrollX: number;
    containerWidth: number;
    containerHeight: number;
    isVerticalMode: boolean;
}
export declare const getTimelineItemVisibility: ({ position, scrollY, scrollX, containerHeight, containerWidth, isVerticalMode, }: TimelineItemVisibility) => boolean;
export declare const setUpdatedLayoutItem: (data: ProgramWithOmittedUuid, modeType: Mode["type"]) => {
    since: string;
    till: string;
    channelUuid?: string | undefined;
    id: string;
    title: string;
    image: string;
};
export {};
