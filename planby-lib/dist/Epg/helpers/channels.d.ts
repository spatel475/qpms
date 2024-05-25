import { ChannelWithPosition } from "./types";
export declare const getChannelVerticalPosition: (channel: ChannelWithPosition, isVerticalMode: boolean) => ChannelWithPosition;
export declare const getChannelGroupTreeProps: (channel: ChannelWithPosition) => {
    nestedChildren: string[] | undefined;
    isFirstNestedChild: boolean;
    isLastNestedChild: boolean;
    isOpened?: boolean | undefined;
    uuid: string;
    logo: string;
    groupTree?: boolean | undefined;
    parentChannelUuid?: string | undefined;
    isNestedChild: boolean;
    position: Pick<import("./types").Position, "top" | "height"> & Partial<Pick<import("./types").Position, "left" | "width">>;
    index: number;
};
