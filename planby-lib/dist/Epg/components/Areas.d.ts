import React from "react";
import { Area } from "../helpers/interfaces";
import { DateTime } from "../helpers/types";
interface AreasProps {
    isVerticalMode: boolean;
    areas: Area[];
    height: number;
    hourWidth: number;
    sidebarWidth: number;
    timelineHeight: number;
    startDate: DateTime;
    endDate: DateTime;
}
export declare function Areas({ isVerticalMode, ...props }: AreasProps): React.JSX.Element;
export {};
