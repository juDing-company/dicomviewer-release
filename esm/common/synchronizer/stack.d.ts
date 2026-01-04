import { stackScrollSynchronizer } from '../customCornerstone/synchronizer';
declare const synchronizerMap: {
    stackPositionSynchronizer: any;
    stackIndexSynchronizer: any;
    stackScrollSynchronizer: typeof stackScrollSynchronizer;
};
export type StackSynchronizerTypes = keyof typeof synchronizerMap;
declare let synchronizer: any;
declare function addElements(): Promise<import("cornerstone-core").EnabledElement[]>;
declare const addElementsLazy: {
    (...args: any[]): any;
    cancel: () => void;
    flush: () => any;
    pending: () => boolean;
};
declare function cooldown(wait: number): void;
declare function setHandler(type: StackSynchronizerTypes): void;
declare function clearHandler(): void;
declare function clear(): void;
declare function destroy(): void;
export { synchronizer, addElements, addElementsLazy, cooldown, clearHandler, setHandler, clear, destroy };
