/** @prettier  */
import { AxiosProgressEvent } from 'axios';
export declare function getStudyInfoService(wadoURL: string, studyUID: string, hospID: string, params: {
    departCode?: string;
}): Promise<any>;
export declare function getSeriesMetaService(wadoURL: string, studyUID: string, seriesUID: string, hospID: string, params: {
    departCode?: string;
}): Promise<any>;
export declare function getSeriesDCMPathService(wadoURL: string, studyUID: string, seriesUID: String, hospID: string): Promise<any>;
export declare function getSeriesVRTPathService(wadoURL: string): Promise<any>;
export declare function getStudyToolsDataService(wadoURL: string, studyUID: string, params: {
    hospID: string;
    departCode?: string;
}): Promise<any>;
export declare function setStudyToolsDataService(wadoURL: string, studyUID: string, data: {
    hospID: string;
    markJson: string;
    departCode?: string;
}): Promise<any>;
export declare function getStudyKeyImageService(wadoURL: string, studyUID: string, params: {
    hospID: string;
    departCode?: string;
}): Promise<any>;
export declare function setStudyKeyImageService(wadoURL: string, studyUID: string, data: {
    hospID: string;
    markKeyJson: string;
    departCode?: string;
}): Promise<any>;
export declare function getAICheckResultService(resultURL: URL, studyUID: string): Promise<any[]>;
export declare function postFilmService(wadoURL: string, data: {
    studyUID: string;
    patientName?: string;
    sex?: string;
    imagesData: Blob[];
    imageIds: string[][];
}, onUploadProgress: (progressEvent: AxiosProgressEvent) => void): Promise<any>;
