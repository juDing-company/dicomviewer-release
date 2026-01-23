import type Series from '@/dicom/Series';
import type { PtCell } from '@/dicom/DicomInterface';
declare class StudySlider {
    className: string;
    container: HTMLElement | null;
    scrollData: {
        currentIndex: number;
        _scrollLen: number;
        scrollLen: number;
        _stepLen: number;
        stepLen: number;
    };
    createLayout(parentContainer: HTMLElement, seriesArr: Array<Series | undefined>, count: PtCell, forceRender?: boolean): void;
    visibility(visibility: boolean): void;
    setIndex(index: number): void;
}
export default StudySlider;
