import type { StackSynchronizerTypes } from '@/common/synchronizer/stack';
import type { WebDicomViewOptions, AIOptions } from '@/index.d';
import type { ToolData } from './toolDataOrigin';
import type { WebDicomView } from '@/index';
import type { Series } from '@/dicom';
export type ImageType = -1 | 0 | 1;
export type ImageCacheTypeDefault = 0 | 1;
declare const store: {
    /** @deprecated  */
    sharedArrayBuffer: undefined | boolean;
    instanceOptions: WebDicomViewOptions & {
        container: string | HTMLDivElement;
        wado: string;
        hospID: string;
        studyUID: string;
    };
    env: string;
    isMobile: boolean;
    isDEV: boolean;
    webDicomView: WebDicomView;
    forceIM: boolean;
    imageTypeDefault: ImageType | undefined;
    _imageType: ImageType | null;
    imageType: ImageType;
    tackSynchronizerTypeDefault: StackSynchronizerTypes;
    _tackSynchronizerType: StackSynchronizerTypes | null;
    tackSynchronizerType: StackSynchronizerTypes;
    _imageCacheTypeDefault: ImageCacheTypeDefault;
    imageCacheTypeDefault: ImageCacheTypeDefault;
    logoURL: string;
    cavanAroundInfo: boolean;
    minRenderCountMPR3D: number;
    preload: {
        fullLoad: boolean;
        scroll: boolean;
        scrollNum: number;
        seriesFetchNum: number;
    };
    AI: {
        active: boolean;
        getParseHandler: AIOptions["getParseHandler"];
        jumpFirstAI: boolean;
        parseSuccess: boolean;
        resultURL: URL;
    };
    navBarMobileVisibility: boolean;
    toolsBar: {
        /** @deprecated This method is deprecated and should not be used. fasModeVisibility should be used instead */
        fastImageModeVisibility: any;
        /** @deprecated This method is deprecated and should not be used. MPRFusionVisibility should be used instead */
        MPRFusion2Visibility: boolean;
        aboutUsVisibility: boolean;
        AIVisibility: boolean;
        enhanceVisibility: boolean;
        fasModeVisibility: boolean;
        imageModeVisibility: boolean;
        imageStitchingVisibility: boolean;
        languageVisibility: boolean;
        majModeVisibility: boolean;
        MPRFusionVisibility: boolean;
        MPRVisibility: boolean;
        printVisibility: boolean;
        seriesBarVisibility: boolean;
        staModeVisibility: boolean;
        VRTVisibility: boolean;
        customMenu: {
            main: undefined | ToolData[];
            MPR: undefined | ToolData[];
            VRT: undefined | ToolData[];
        };
    };
    toolsOptions: {
        toolColor: string;
        zoomTool: {
            maxScale: number;
            minScale: number;
        };
    };
    DBCacheImages: {
        dbName: string;
        version: number;
        storeName: string;
        temporaryEnable: boolean;
        enableDefault: boolean;
        _enable: boolean | null;
        enable: boolean;
    };
    aboutUs: {
        imgURl: any;
        description: () => any;
        originVersion: any;
        version: string;
        copyright: () => any;
        tel: () => any;
    };
    toolsData: {
        main: undefined | ToolData[];
        MPR: undefined | ToolData[];
        VRT: undefined | ToolData[];
    };
    systemInfo: {
        jsHeapSizeLimit: number;
        performanceLevel: number;
    };
    fusionData: {
        [key: string]: Series[];
    };
    VRTWSURL: undefined | string;
};
export default store;
