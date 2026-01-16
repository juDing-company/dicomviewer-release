export interface ToolData {
    toolName?: (() => string) | string;
    toolTag?: string;
    iconText?: string;
    icon?: (() => string) | string;
    select?: boolean;
    divider?: boolean;
    disActive?: boolean;
    isActive?: boolean;
    isToggle?: boolean;
    isLonelyGroup?: boolean;
    visibility?: (() => boolean) | boolean;
    floatRight?: boolean;
    children?: ToolData[];
}
export interface Store {
    main: ToolData[];
    MPR: ToolData[];
    VRT: ToolData[];
}
declare const store: Store;
export default store;
