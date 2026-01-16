import type { Meta } from '@/common/metaData/index.d';
import type { TypedArray } from '@/index.d';
export declare function mergeAndExpandUint16Arrays(imageInfos: {
    image: Uint16Array;
    width: number;
    height: number;
    offset: {
        left: number;
        top: number;
    };
}[]): Uint16Array;
export declare function toUint8ClampedArray(inputArray: TypedArray): Uint8ClampedArray<ArrayBuffer>;
export declare function fromUint8ClampedArray<T extends TypedArray>(uint8ClampedArray: Uint8ClampedArray, TypedArray: {
    new (length: number): T;
}): T;
export declare function storagePixelAndMeta(pixelData: TypedArray, imageIds: string[]): Promise<{
    imageId: string;
    imageURL: string;
    meta: Meta;
}>;
export declare function toggleStitchingToolsActive(force?: boolean): void;
export declare function clearToolsActive(): void;
export declare function removeToolsForElement(element: HTMLElement): void;
