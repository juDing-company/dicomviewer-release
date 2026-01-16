import Series from '@/dicom/Series';
declare class SeriesSlider {
    layoutclassName: string;
    EVENTSHandle: Map<HTMLElement, () => void>;
    constructor();
    changMarker(container: HTMLElement, currentImageIdIndex: number): string;
    createLayout(container: HTMLElement, series?: Series, scrollIndex?: number): void;
    removeLayout(container: HTMLElement): void;
}
export default SeriesSlider;
