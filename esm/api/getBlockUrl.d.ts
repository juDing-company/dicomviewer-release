import type { ImageType } from '@/store/app';
declare const _default: ({ blockIndex, hospID, id, imageType, seriesUID, sopInstanceUID, studyUID, wado, }: {
    hospID: string;
    id: string;
    seriesUID: string;
    sopInstanceUID: string;
    studyUID: string;
    blockIndex?: number;
    imageType?: ImageType;
    wado?: string;
}) => string;
export default _default;
