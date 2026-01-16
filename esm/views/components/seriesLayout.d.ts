import { PtCell } from '@/dicom/DicomInterface';
import Series from '@/dicom/Series';
import IconSynchronizer from '@/views/components/iconSynchronizer';
import SeriesSlider from '@/views/components/seriesSlider';
import StudySlider from '@/views/components/studySlider';
import QuickMenuLayout from './quickMenuLayout';
import { State } from '@/views/components/SeriesLayoutState';
export interface Dataset {
    imgRow?: string;
    imgColumn?: string;
    seriesUID?: string;
    studyUID?: string;
    seriesIndex?: number;
}
export interface SeriesLayoutData {
    seriesUID?: string;
    seriesDom: HTMLElement;
}
declare class SeriesLayout {
    seriesSlider: SeriesSlider;
    studySlider: StudySlider;
    iconSynchronizer: IconSynchronizer;
    seriesLayouts: Array<SeriesLayoutData>;
    quickMenuLayout: QuickMenuLayout | undefined;
    constructor(seriesSlider: SeriesSlider, studySlider: StudySlider, iconSynchronizer: IconSynchronizer);
    /**
     * create single layout for dicom image
     * */
    initSingle(parentContainer: HTMLElement, series: Series | undefined, dataset: Dataset | undefined, status?: State): void;
    /**
     * create image layout by series count
     * */
    createCanvasContainers(parentContainer: HTMLElement, seriesArr: Array<Series | undefined>, count: PtCell, createSeriesinfoLayout?: boolean): void;
    /**
     * create image layout
     * */
    createImagesLayout(parentContainer: HTMLElement, series: Series, count: PtCell): void;
    dblclickCanvasLayout(layoutCellsOuter: HTMLElement, layoutCellsInner: HTMLElement, isSignBigLayout?: boolean): void;
    initSeriesLayout(currentElement: HTMLElement, series?: Series): void;
    seriesLayoutsUpdate(seriesDom: HTMLElement, seriesUID: string): void;
    toggleSeriesStyle(params: {
        target?: HTMLElement;
        seriesUID?: string;
        seriesIndex?: number;
    }): void;
    toggleNavigatorInfo(seriesUID: string, showProgress?: boolean): void;
}
export default SeriesLayout;
