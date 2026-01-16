import type { RGB } from '@cornerstonejs/core/dist/esm/types';
export declare function getImageRange(element: HTMLDivElement, volumeId: string): {
    lower: any;
    upper: any;
};
export declare function getVOIRange(element: HTMLDivElement, volumeId: string): {
    lower: number;
    upper: number;
};
export declare function interpolateVec3(a: RGB, b: RGB, t: number): number[];
