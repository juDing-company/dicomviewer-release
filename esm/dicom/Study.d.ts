/** @prettier  */
import Series from './Series';
import DicomInfo from './DicomInfo';
import type { StudyProps, DicomInfoProps, SeriesOrigin } from './DicomInterface';
declare class Study {
    age: string;
    departCode?: string;
    hasDesensitize: number;
    hasseries: number;
    hospID: string;
    /** @deprecated */
    imgs?: Array<DicomInfoProps>;
    imgCount: number;
    modality: string;
    static modality: string;
    name: string;
    originalType: string;
    orgname: string;
    patientID: string;
    sex: string;
    /** @deprecated */
    storageType?: number;
    studydate: string;
    /** @deprecated */
    studyID: string;
    studyUID: string;
    studyUIDCopilot: Array<string>;
    /** @deprecated */
    studyUUID: string;
    /** @deprecated */
    totaltype?: string;
    /** @deprecated */
    images: Array<DicomInfo>;
    studytime: string;
    seriesArr: Array<Series>;
    constructor({ age, departCode, hasDesensitize, hasseries, hospID, imgcount: imgCount, imgs, modality, name, orginaltype: originalType, orgname, patientid: patientID, serieses, sex, storageType, studydate, studyid, studyuid: studyUID, studyuuid: studyUUID, totaltype, }: StudyProps);
    setSeries(seriesArr: Array<SeriesOrigin>, studyUID?: string, hospID?: string): void;
    addSeriesCopilot(seriesArr: Array<SeriesOrigin>, studyUID: string, hospID?: string): void;
    static getSeriesLayoutCount(): {
        x: number;
        y: number;
    };
    static getSeriesImagesLayoutCount(): {
        x: number;
        y: number;
    };
    sortSeries<T extends {
        num: string | number;
    } = SeriesOrigin>(seriesArr: Array<T>): T[];
}
export default Study;
