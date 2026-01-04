declare let synchronizer: any;
declare function addElements(enabledElements: HTMLElement[]): void;
declare const addElementsLazy: {
    (...args: any[]): any;
    cancel: () => void;
    flush: () => any;
    pending: () => boolean;
};
declare function clearHandler(): void;
declare function reduceHandler(handler: (...params: any) => void): void;
declare function clear(): void;
declare function destroy(): void;
export { synchronizer, addElements, addElementsLazy, clearHandler, reduceHandler, clear, destroy };
