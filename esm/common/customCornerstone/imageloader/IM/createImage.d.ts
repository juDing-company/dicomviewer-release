import type { Image } from '@/index.d';
declare function createImage(imageId: string, pixelData: ArrayBuffer, /* transferSyntax: string, */ options?: any): Promise<Image>;
export default createImage;
