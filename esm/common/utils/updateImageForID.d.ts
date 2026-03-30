import type { Image } from 'cornerstone-core';
declare function getEnabledElementForID(imageId: string): Promise<import("cornerstone-core").EnabledElement>;
declare function updateImageForID(imageId: string, handle?: (image: Image, element: HTMLElement) => void): Promise<void>;
export { updateImageForID, getEnabledElementForID };
