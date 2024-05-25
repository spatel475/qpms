import { ChannelWithOmittedUuid, Timezone } from "./interfaces";
import { ChannelWithPosition, ProgramWithPosition } from "./types";
export declare const setLayoutScreenCloneElement: (event: ProgramWithPosition, index: number) => void;
export declare const deleteLayoutScreenCloneElement: (event: ProgramWithPosition) => void;
export declare const getLayoutScreenCloneElements: () => Record<string, Record<string, ProgramWithPosition>>;
export declare const resetLayoutScreenCloneElements: () => void;
export declare const getChannelsContentHeight: (channels: ChannelWithPosition[]) => number;
export declare const setChannelEpgIndexes: ({ uuid, first, last, }: {
    uuid: string;
    first?: number | undefined;
    last?: number | undefined;
}) => void;
export declare const getChannelEpgIndexes: (uuid: string) => {
    uuid: string;
    first: number;
    last: number;
};
export declare const resetChannelsEpgIndexes: () => void;
export declare const setChannelGroupTree: (channel: ChannelWithOmittedUuid) => void;
export declare const setChannelGroupTreeNestedChildren: (channelUuid: string, nestedChildUuid: string) => void;
export declare const getChannelsGroupTree: () => Record<string, {
    isOpen: boolean;
    uuid: string;
    groupTree: boolean;
    nestedChildren?: string[] | undefined;
}>;
export declare const setTimezoneOptionsCache: (props: Timezone) => void;
export declare const getTimezoneOptionsCache: () => Timezone;
export declare const resetTimezoneOptionsCache: () => void;
