import type { Image, TypedArray } from '@/index.d';
declare function createImage(imageId: string, pixelData: TypedArray, options?: any): Promise<Image>;
export default createImage;
