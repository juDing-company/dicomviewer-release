declare class SeriesImageCruxMarker {
    layoutclassName: string;
    EVENTSHandle: Map<HTMLElement, () => void>;
    constructor();
    createLayout(canvasContainer: HTMLElement): void;
    removeLayout(container: HTMLElement): void;
}
export default SeriesImageCruxMarker;
