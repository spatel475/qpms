import * as React from "react";
import { ChannelWithPosition } from "../helpers/types";
interface ChannelProps<T> {
    isVerticalMode: boolean;
    channel: T;
    onOpenGroupTree?: (data: ChannelWithPosition) => void;
    onClick?: (v: ChannelWithPosition) => void;
}
export declare function Channel<T extends ChannelWithPosition>({ isVerticalMode, channel, onOpenGroupTree, onClick, ...rest }: ChannelProps<T>): React.JSX.Element;
export {};
