import React from "react";
import { Theme } from "./helpers/interfaces";
interface EpgProps {
    width?: number;
    height?: number;
    isVerticalMode?: boolean;
    isRTL?: boolean;
    isSidebar: boolean;
    isTimeline?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    loader?: React.ReactNode;
    theme: Theme;
    globalStyles?: string;
    sidebarWidth: number;
    timelineHeight: number;
}
export declare const Epg: React.ForwardRefExoticComponent<EpgProps & React.RefAttributes<HTMLDivElement>>;
export {};
