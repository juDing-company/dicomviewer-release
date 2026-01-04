import { ComputeStore } from 'simple2k13';
type AnnotationTool = new () => {
    name: string;
};
declare const memo: ComputeStore;
declare function getGlobalAnnotationTools(): AnnotationTool[];
declare const getGlobalAnnotationToolNames: () => string[];
export { memo, getGlobalAnnotationTools, getGlobalAnnotationToolNames };
