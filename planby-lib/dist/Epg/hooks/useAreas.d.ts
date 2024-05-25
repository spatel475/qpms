/// <reference types="react" />
import { Area } from "../helpers/interfaces";
import { DateTime } from "../helpers/types";
interface UseAreasProps {
    areas: Area[];
    hourWidth: number;
    sidebarWidth: number;
    height: number;
    timelineHeight: number;
    startDate: DateTime;
    endDate: DateTime;
}
export declare function useAreas(props: UseAreasProps): {
    data: {
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
    }[];
};
export {};
