import { BaseTimeFormat } from "../helpers/types";
import { Mode } from "../helpers";
interface useCurrentTimeProps {
    isVerticalMode?: boolean;
    isBaseTimeFormat?: BaseTimeFormat;
    mode: Mode;
    positionX: number;
    timelineHeight: number;
    sidebarWidth: number;
}
export declare function useCurrentTime({ isVerticalMode, isBaseTimeFormat, mode, positionX, timelineHeight, sidebarWidth, }: useCurrentTimeProps): {
    time: string;
    getCurrentTimeStyles: () => {
        position: {
            position: string;
            width: string | number;
            height: number;
            top: number;
            left: number;
        };
    };
};
export {};
