declare let synchronizer: any;
declare function addElements(): Promise<import("cornerstone-core").EnabledElement[]>;
declare const addElementsLazy: {
    (...args: any[]): any;
    cancel: () => void;
    flush: () => any;
    pending: () => boolean;
};
declare function clearHandler(): void;
declare function clear(): void;
declare function destroy(): void;
export { synchronizer, addElements, addElementsLazy, clearHandler, clear, destroy };
