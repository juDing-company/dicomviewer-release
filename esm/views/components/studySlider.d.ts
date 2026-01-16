import { PtCell } from '@/dicom/DicomInterface';
import Series from '@/dicom/Series';
declare class StudySlider {
    className: string;
    container: HTMLElement;
    scrollData: any;
    constructor();
    createLayout(parentContainer: HTMLElement, seriesArr: Array<Series | undefined>, count: PtCell, forceRender?: boolean): void;
    visibility(visibility: boolean): void;
    setIndex(index: number): void;
}
export default StudySlider;
