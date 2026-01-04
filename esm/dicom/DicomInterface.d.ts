/** @prettier  */
import type { QueryParamsBase } from '@/index.d';
import type Study from './Study';
export interface PtCell {
    x: number;
    y: number;
}
export interface DicomInfoProps {
    id?: string;
    imageIcon?: string;
    isLoadImage: boolean;
    num: string;
}
export interface HttpMetaOrigin {
    /** @deprecated plese use Meta sopInstanceUID  */
    id?: string;
    /** @deprecated  */
    uid?: string;
    /**  @deprecated  */
    uuid?: string;
    accnum: string;
    acqdt: string;
    acqtm: string;
    age: string;
    birth: string;
    bita: string;
    bits: string;
    blocks: string;
    col: string;
    dcmfile: string;
    fileId: string;
    fileLocation: string;
    fileName: string;
    frames?: string;
    hbit: string;
    imgnum: string;
    imgori: string;
    imgpos: string;
    imgtype: string;
    inst: string;
    isDcm?: '0' | '1';
    isIM?: string;
    kv: string;
    ma?: string;
    manu: string;
    mod: string;
    name: string;
    orb: string;
    orl: string;
    orr: string;
    ort: string;
    path: string;
    patid: string;
    phme: string;
    pixrep: string;
    pixx: string;
    pixy: string;
    relationid: string;
    rescin: string;
    rescsl: string;
    row: string;
    rphn?: string;
    sappix: string;
    scount?: string;
    serdes: string;
    serid: string;
    seruid: string;
    sex: string;
    sliceth: string;
    sopuid: string;
    studes: string;
    studt: string;
    stuid: string;
    stutm: string;
    stuuid: string;
    syntaxuid?: string;
    thumbnail: string;
    url?: string;
    wc: string;
    ww: string;
}
export interface HttpMeta extends HttpMetaOrigin {
    imageId: string;
}
export interface HttpMetaToDicomMeta extends HttpMeta {
    key: string;
    queryParams: QueryParamsBase;
    study: Study;
}
export interface DicomImageCell extends DicomInfoProps, HttpMeta {
    maxGray: number;
    minGray: number;
}
export interface viewPortCell {
    id: number;
    image: DicomImageCell;
    ww: number;
    wc: number;
    rotation: number;
    scale: number;
    translation: PtCell;
    hflip: boolean;
    vflip: boolean;
    pseudo: string;
    invert: boolean;
    wwScale: number;
    isLoadImage: boolean;
}
export interface ImageIcon {
    id: string;
    imageInstanceUid: string;
    num: string;
    url: string;
}
export interface SeriesOrigin {
    /**  @deprecated */
    uid: string;
    /**  @deprecated */
    uuid: string;
    desp?: string;
    flatSeries?: boolean;
    imagecount: number;
    imgs: Array<ImageIcon>;
    num: string;
    sign?: string;
}
export interface SeriesProps extends Omit<SeriesOrigin, 'imagecount'> {
    describ: string;
    flatSeries: boolean;
    icon: string;
    studyUID: string;
}
export interface StudyProps {
    age: string;
    hasDesensitize: number;
    hasseries: string;
    hospID: string | number;
    imgcount: string;
    imgs?: Array<DicomInfoProps>;
    modality: string;
    name: string;
    orginaltype: string;
    orgname: string;
    patientid: string;
    seriescount: string;
    serieses: Array<SeriesOrigin>;
    sex: string;
    storageType?: number;
    studydate: string;
    studyid: string;
    studyuid: string;
    studyuuid: string;
    totaltype?: string;
}
