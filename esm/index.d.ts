/** @prettier  */
import '@/common/init';
import { Image } from 'cornerstone-core';
import { LoadAndCacheImagesOptions } from '@/common/customCornerstone/core';
import DicomLayoutView from '@/views/DicomLayoutView';
import SeriesLayoutState from '@/views/components/SeriesLayoutState';
import SeriesMarker from '@/views/components/seriesMarker';
import { Study } from '@/dicom';
import type { Series } from '@/dicom';
import type { DataSet } from 'dicom-parser';
import type { PtCell } from '@/dicom/DicomInterface';
import type { PrintLayoutOptions, default as WebDicomViewPrint } from '@/views/Print/index';
import type { AIOptions, StudyArrQuery, StudyQuery, WebDicomViewOptions } from '@/index.d';
import type { FusionData } from '@/views/components/fusionLayout';
import type WebDicomViewStitching from '@/views/Stitching/index';
import type { MPRSeriesData } from '@/views/MPR/index.d';
import type WebDicomViewMPR from '@/views/MPR/index';
import '@/assets/css/global.less';
type Props = [
    container: string | HTMLDivElement,
    wado: string,
    hospID: string,
    studyUID: string | StudyArrQuery,
    options?: WebDicomViewOptions
];
declare class WebDicomView {
    globalContainer: HTMLDivElement;
    seriesCount: PtCell;
    studyArrQuery: StudyArrQuery;
    studyArr: Array<Study>;
    studyScrollIndex: number;
    reqStudyCount: number;
    selectSeries?: {
        seriesUID?: string;
        seriesIndex?: number;
        studyUID?: string;
    };
    seriesLayoutState: SeriesLayoutState;
    layoutView: DicomLayoutView;
    webDicomViewStitching?: typeof WebDicomViewStitching;
    webDicomViewPrint?: typeof WebDicomViewPrint;
    webDicomViewMPR?: typeof WebDicomViewMPR;
    eventNamespace: string;
    isDestroy: boolean;
    toastDict: any;
    constructor(...props: Props);
    private init;
    getStudyInfoHandle(studyQuery: StudyQuery, studyIndex: number): Promise<void>;
    getStudyInfos(): Promise<void>;
    addStudy(_studyUID: string | StudyQuery, historyStudyVisibility?: boolean): Promise<void>;
    setFusionData(): void;
    activeAI(AIOptions: AIOptions): void;
    renderLayoutImageToCanvas($canvas: HTMLElement, image: Image & {
        data?: DataSet;
    }, series: Series, interceptors?: () => Promise<void>): Promise<void>;
    initDicomTools($canvas: HTMLElement, series: Series, currentIndex?: number): Promise<void>;
    displaySeriesByImageindex($canvas: HTMLElement, series: Series, interceptors?: () => Promise<void>, imageIndex?: number): Promise<Image>;
    displayDcmByImages(parentContainer: HTMLElement, loadIds: string[], currentIndex?: number): void;
    displayDcmBySlider($canvas: any, stackData: any, dicomArrs: Array<any>, imageIndex: number): void;
    initVRTPath(): Promise<void>;
    initAI(open?: boolean, preLoad?: boolean): Promise<void>;
    initSeries(studyIndex: number): Promise<void>;
    addSeries(seriesArr: Array<Series>): void;
    restoreSeries(seriesArr?: Array<Series | undefined>): Promise<void>;
    restoreNavigation(): void;
    getSeriesMeta(series: Series, studyIndex: number, seriesIndex: number): Promise<void>;
    initFirstStudySeriesLayoutState({ seriesArr }: Study): void;
    initStudyNavigation(studyIndex: number): void;
    reload2d(): Promise<void>;
    initMPR(options: {
        originalSeriesData?: MPRSeriesData;
        levelDefault?: number;
        modality: string;
        isFusionMode: boolean;
        fusionData?: FusionData;
        series?: Series;
        matchFusionSeries?: Series[];
    }): Promise<void>;
    initVRT(): void;
    reloadSynchronizerTools(): Promise<void>;
    cancelToolAndDefaultViewport(): Promise<void>;
    historyStudyTool(visibility?: boolean, forceRestore?: boolean): Promise<void>;
    saveTool(type: 'image' | 'DICOM'): Promise<void>;
    disableSeriesTool(): void;
    invertTool(): void;
    crosshairsTool(active: boolean): Promise<void>;
    referenceLineTool(active: boolean): Promise<void>;
    printTool(options?: PrintLayoutOptions): Promise<void>;
    seriesImagesLayout(seriesDom: HTMLElement, series: Series, ptCell: PtCell, applyGlobal?: boolean): Promise<void>;
    magnifyTool(): void;
    isStudiesLoaded(toast?: boolean): boolean;
    isEqualHospital(): boolean;
    isExistForStudyArrQuery(studyUID: string): boolean;
    queryImage(): {
        modality: any;
        imageId: string;
        minPixelValue: number;
        maxPixelValue: number;
        slope: number;
        intercept: number;
        windowCenter: number;
        windowWidth: number;
        getPixelData: () => number[];
        getImageData: () => ImageData;
        getCanvas: () => HTMLCanvasElement;
        getImage: () => HTMLImageElement;
        rows: number;
        columns: number;
        height: number;
        width: number;
        color: boolean;
        lut: import("cornerstone-core").LUT;
        rgba: boolean;
        columnPixelSpacing: number;
        rowPixelSpacing: number;
        invert: boolean;
        sizeInBytes: number;
        falseColor?: boolean;
        origPixelData?: number[];
        stats?: import("cornerstone-core").ImageStats;
        cachedLut: import("cornerstone-core").LUT;
        colormap?: unknown;
        labelmap?: boolean;
    };
    queryStudy(studyUID: string): Study;
    querySeries(seriesUID: string): Series;
    queryCurrentContainer(tip?: boolean): import("./views/components/seriesLayout").SeriesLayoutData | {
        isStitching: boolean;
        seriesUID: any;
        seriesDom: HTMLElement;
    };
    queryCurrentSeries(currentContainer?: import("./views/components/seriesLayout").SeriesLayoutData | {
        isStitching: boolean;
        seriesUID: any;
        seriesDom: HTMLElement;
    }): Series;
    queryFusionSeries(series: Series): Series[];
    queryModalitySeries(modality: string): Series[];
    loadAndProgressHand: (loadIds: string[], seriesUID: string, options?: {
        type?: string;
        loadAndCacheImagesOptions?: LoadAndCacheImagesOptions;
    }) => void;
    loadAndProgressHandleLazy: {
        (...args: any[]): any;
        cancel: () => void;
        flush: () => any;
        pending: () => boolean;
    };
    bindEvents(): void;
    removeEventListener(): void;
    getMenuDefault: (isI18n?: boolean) => {
        mobile: import("./store/toolDataOrigin").Store;
        PC: import("./store/toolDataOrigin").Store;
    };
    static getMenuDefault: (isI18n?: boolean) => {
        mobile: import("./store/toolDataOrigin").Store;
        PC: import("./store/toolDataOrigin").Store;
    };
    getAroundTagsConfigsDefault: typeof SeriesMarker.getAroundTagsConfigsDefault;
    static getAroundTagsConfigsDefault: typeof SeriesMarker.getAroundTagsConfigsDefault;
    i18n: {
        getLanguage: () => string;
        getLocale: (lang?: import("@/i18n").Language) => import("@/i18n").Locale;
    };
    static i18n: {
        getLanguage: () => string;
        getLocale: (lang?: import("@/i18n").Language) => import("@/i18n").Locale;
    };
    getHangingSettingDefault: typeof WebDicomView.getHangingSettingDefault;
    static getHangingSettingDefault(): import("@/views/HangingSetting/src").HangingSetting;
    reboot: {
        (...args: any[]): any;
        cancel: () => void;
        flush: () => any;
        pending: () => boolean;
    };
    destroy(): Promise<void>;
}
export { WebDicomView };
export default WebDicomView;
