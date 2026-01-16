/** @prettier  */
import Series from './Series';
import DicomInfo from './DicomInfo';
import type { StudyProps, DicomInfoProps, SeriesOrigin } from './DicomInterface';
declare class Study {
    wado: string;
    age: string;
    hasDesensitize: number;
    hasseries: number;
    hospID: string | number;
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
    /** @deprecated */
    studyUUID: string;
    /** @deprecated */
    totaltype?: string;
    /** @deprecated */
    images: Array<DicomInfo>;
    studytime: string;
    /** @deprecated */
    seriesArrOriginal: Array<SeriesOrigin>;
    seriesArr: Array<Series>;
    constructor({ wado, age, hasDesensitize, hasseries, hospID, imgs, imgcount: imgCount, modality, name, orginaltype: originalType, orgname, patientid: patientID, serieses: seriesArrOriginal, sex, storageType, studydate, studyid, studyuid: studyUID, studyuuid: studyUUID, totaltype, }: StudyProps & {
        wado: string;
    });
    setSeries(seriesArr?: Array<SeriesOrigin>): void;
    static getSeriesLayoutCount(): {
        x: number;
        y: number;
    };
    static getSeriesImagesLayoutCount(): {
        x: number;
        y: number;
    };
}
export default Study;
