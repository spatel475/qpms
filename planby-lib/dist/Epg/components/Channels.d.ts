import * as React from "react";
import { ChannelItem, ChannelWithPosition } from "../helpers/types";
interface ChannelsProps {
    isVerticalMode: boolean;
    isTimeline: boolean;
    isRTL: boolean;
    isChannelVisible: (position: any) => boolean;
    channels: ChannelWithPosition[];
    contentHeight: number;
    sidebarWidth: number;
    timelineHeight: number;
    scrollY: number;
    openChannelGroupTree: (data: ChannelWithPosition) => void;
    renderChannel?: (v: ChannelItem) => React.ReactNode;
}
export declare function Channels(props: ChannelsProps): React.JSX.Element;
export {};
