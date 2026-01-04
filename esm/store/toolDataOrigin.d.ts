import { ComputeStore } from 'simple2k13';
declare const memo: ComputeStore;
type AtLeastOne = {
    toolTag: string;
} | {
    toolName: (() => string) | string;
};
type ToolData = {
    toolName?: (() => string) | string;
    toolNameAlias?: string;
    toolTag?: string;
    toolType?: string;
    iconText?: string;
    iconImg?: string;
    icon?: (() => string | string[]) | string | string[];
    select?: boolean;
    divider?: boolean;
    disActive?: boolean;
    disChildrenCustom?: boolean;
    isActive?: boolean;
    isToggle?: boolean;
    isLonelyGroup?: boolean;
    visibility?: (() => boolean) | boolean;
    quickMenuVisibility?: (() => boolean) | boolean;
    floatRight?: boolean;
    children?: ToolData[];
    clickHandle?: () => void;
} & AtLeastOne;
interface Store {
    main: ToolData[];
    MPR: ToolData[];
    VRT: ToolData[];
}
export { memo, type ToolData, type Store };
declare const _default: () => Store;
export default _default;
