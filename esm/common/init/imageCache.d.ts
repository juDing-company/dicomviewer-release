declare const setMaxSize: () => void;
declare const clearImageCache: (caller: string, force?: boolean, threshold?: number) => boolean;
declare const clearImageCacheDebounce: {
    (...args: any[]): any;
    cancel: () => void;
    flush: () => any;
    pending: () => boolean;
};
declare const purge: () => void;
export { setMaxSize, clearImageCache, clearImageCacheDebounce, purge };
