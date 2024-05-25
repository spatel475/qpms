/// <reference types="react" />
import { Area } from "./interfaces";
import { DateTime } from "./types";
interface AreasData {
    area: Area;
    hourWidth: number;
    sidebarWidth: number;
    timelineHeight: number;
    height: number;
    startDate: DateTime;
    endDate: DateTime;
}
export declare const getAreasFields: ({ area, startDate, endDate, hourWidth, sidebarWidth, timelineHeight, height, }: AreasData) => {
    showArea: boolean;
    areaFieldStyles: {
        positionX: number;
        width: number;
        height: number;
        timelineHeight: number;
    };
    areaBgStyles: import("react").CSSProperties;
    startDate: string;
    endDate?: string | undefined;
    styles: import("react").CSSProperties;
    onClick?: (() => void) | undefined;
    annotations?: {
        styles: import("react").CSSProperties;
        textStart?: string | undefined;
        textEnd?: string | undefined;
    } | undefined;
};
export {};
