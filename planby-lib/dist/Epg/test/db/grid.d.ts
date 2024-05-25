interface BuildGridItems {
    [key: string]: any;
}
export declare function buildGridItems(overrides?: BuildGridItems): {
    channel: {
        country: any;
        logo: any;
        provider: number;
        title: any;
        type: any;
        uuid: string;
        year: any;
        position: {
            top: number;
            height: number;
        };
    };
    position: {
        top: number;
        height: number;
        left: number;
        width: number;
        edgeEnd: number;
    };
};
export {};
