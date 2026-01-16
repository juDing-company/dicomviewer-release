import type { Image } from '@/index.d';
declare const loadImage: (imageId: string, options?: {}) => {
    promise: Promise<Image>;
    cancelFn: () => void;
};
export default loadImage;
