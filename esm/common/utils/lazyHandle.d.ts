/** @prettier  */
export type Func<T = any> = Function;
export declare const clearAlllazyHandle: () => void;
export declare const lazyHandle: <T = any>(FuncName: any, func: Func<T>, ...params: any) => T;
export default lazyHandle;
