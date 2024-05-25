import { Layers } from "./enums";
interface LineStyles {
    isVerticalMode: boolean;
    isTimeline: boolean;
    lineStyles: {
        position: string;
        top: number;
        width: number;
    };
    position: {
        height: number;
        left: number;
        zIndex: Layers;
    };
}
export declare const getLineStyles: ({ isVerticalMode, isTimeline, lineStyles, position, }: LineStyles) => {
    position: {
        position: string;
        top: number;
        left: number;
        width: number;
        height: number;
        zIndex: Layers;
    };
};
export {};
