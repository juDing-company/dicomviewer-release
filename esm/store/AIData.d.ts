interface AIdata {
    BMDescription: string;
    textBoxContent: string[];
    addByUser: boolean;
    archived: number;
    'base+/-': string;
    categoryDescription: string;
    coord: {
        x: number;
        y: number;
        z: number;
    };
    height: number;
    instanceNumber: number;
    labelID: string;
    lung_rads_lv: number;
    matched: number;
    maxInstanceNumber: string;
    minInstanceNumber: string;
    nodule_avgHU: number;
    nodule_bbox: {
        [key: string]: {
            position: {
                x: number;
                y: number;
            };
            size: {
                h: number;
                w: number;
            };
        };
    };
    nodule_big_dia: number;
    nodule_bm: {
        Benign: number;
        Mainly_Benign: number;
        Mainly_Malignant: number;
        Malignant: number;
    };
    nodule_bm_prob: number;
    noduleBmProbCN: string;
    nodule_cross: {
        instanceNumber: string;
        major_diam: [number, number][];
        major_diameter_length_mm: number;
        minor_diam: [number, number][];
        minor_diameter_length_mm: number;
        x: number;
        y: number;
        z: number;
    }[];
    nodule_diameter: number;
    nodule_location: number;
    nodule_maxHU: number;
    nodule_minHU: number;
    nodule_no: number;
    nodule_prob: number;
    nodule_segment: number;
    nodule_type: {
        Calcification: number;
        Ground_Glass: number;
        Part_Solid: number;
        Solid: number;
        pleural: number;
    };
    noduleType: string;
    nodule_volume: number;
    rads_no: string;
    selected: number;
    seriesID: string;
    solid_volumn: number;
    url: string;
    vti_path: string;
    width: number;
}
interface Measurement extends AIdata {
    visible: boolean;
    active: boolean;
    invalidated: boolean;
    textBoxPointsCompute?: boolean;
    handles: {
        start: {
            x: number;
            y: number;
            movesIndependently: boolean;
            hasBoundingBox: boolean;
        };
        end: {
            x: number;
            y: number;
            movesIndependently: boolean;
            hasBoundingBox: boolean;
        };
        textBox: {
            x: number;
            y: number;
            active: boolean;
            hasMoved: boolean;
            movesIndependently: boolean;
            drawnIndependently: boolean;
            allowedOutsideImage: boolean;
            hasBoundingBox: boolean;
        };
    };
}
declare const dataMap: Map<any, Measurement[]>;
declare const successStudyUID: {
    [key: string]: boolean;
};
declare const seriesIndex: {
    store: Record<string, Array<number>>;
    IDArr: string[];
    add: (seriesUID: string, key: number) => void;
    sort: () => void;
    getFirstIndex: (seriesUID: string) => any;
    getSeriesIDArr: () => any;
};
declare const addAIData: (result: AIdata[], studyUID: string) => void;
export { dataMap as AIDataMap, successStudyUID as AISuccessStudyUID, seriesIndex as AIseriesIndex, addAIData };
