import { ComputeStore } from 'simple2k13';
import type { ToolData, Store } from './toolDataOrigin';
declare const memo: ComputeStore;
declare const getMenuDefault: (isI18n?: boolean) => {
    mobile: Store;
    PC: Store;
};
export { memo, getMenuDefault };
declare const _default: {
    main: () => ToolData[];
    MPR: () => ToolData[];
    VRT: () => ToolData[];
};
export default _default;
