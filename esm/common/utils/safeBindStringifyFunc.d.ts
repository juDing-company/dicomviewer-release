/** @prettier  */
import type { TagRender } from '@/index.d';
type Context = Parameters<TagRender>[0];
export declare function bindStringifyFunc(tagRender?: TagRender | string, allowFunctionStringFallback?: boolean): (ctx: Context) => any;
export {};
