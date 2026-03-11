import type { Image } from 'cornerstone-core';
declare function updateImageForID(imageId: string, handle?: (image: Image) => void): Promise<void>;
export default updateImageForID;
