import { loadAndCacheImage as _loadAndCacheImage } from 'cornerstone-core';
import type { Image } from '@/index.d';
declare const loadAndCacheImage: typeof _loadAndCacheImage;
declare const cancelLoadAndCacheImages: () => Promise<string>;
interface LoadAndCacheImagesOptions {
    cancel?: boolean;
    forceCancelAll?: boolean;
    type?: string;
    countCallback?: (image: Image | undefined, imageId: string, count: number) => void;
}
declare const loadAndCacheImages: (imageIds: Array<string>, options?: LoadAndCacheImagesOptions) => Promise<void>;
export { loadAndCacheImage, loadAndCacheImages, cancelLoadAndCacheImages, type LoadAndCacheImagesOptions };
