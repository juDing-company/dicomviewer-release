import type { MPRRunOptions } from './index.d';
declare function MPRRun(parentElement: HTMLDivElement, options: MPRRunOptions): Promise<void>;
declare function MPRDestroy(): Promise<void>;
declare const _export: {
    MPRRun: typeof MPRRun;
    MPRDestroy: typeof MPRDestroy;
};
declare const version: any;
export { version };
export default _export;
