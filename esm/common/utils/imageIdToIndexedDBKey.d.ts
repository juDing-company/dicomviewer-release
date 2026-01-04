export default function imageIdToIndexedDBKey(imageId: string, imageType: number): {
    imageTypeEN: string;
    indexedDBKeyPeel: string;
    indexedDBKey: string;
    isPixelData: boolean;
};
