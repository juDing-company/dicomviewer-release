import type { SeriesProps, ImageIcon, HttpMeta } from './DicomInterface';
import type { Meta } from '@/common/metaData/index.d';
import type DicomInfo from './DicomInfo';
import type Study from './Study';
declare class Series {
    describ: string;
    icon: string;
    isLoaded?: boolean;
    imgs: Array<ImageIcon>;
    flatSeries: boolean;
    /** @deprecated */
    uid?: string;
    /** @deprecated */
    uuid?: string;
    num: string;
    seriesUID: string;
    studyUID: string;
    index: number;
    /** @deprecated */
    dicomInfos: Array<DicomInfo>;
    loadIds: Array<string>;
    /**
     * @deprecated metaArrOriginal is deprecated, plese ues meatData or getMeta0
     */
    metaArrOriginal: Array<HttpMeta>;
    multiframe: {
        numFrames?: number;
        frameRate?: number;
    };
    constructor({ describ, icon, imgs, num, uid, uuid, flatSeries, studyUID }: SeriesProps);
    /**
     * init dicom series
     * */
    initMeta(metaArr: Array<HttpMeta>, study: Study, seriesIndex: number): void;
    getMeta0(): Meta;
}
export default Series;
