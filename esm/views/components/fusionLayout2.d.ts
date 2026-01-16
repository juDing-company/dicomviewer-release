import type { Series } from '@/dicom';
declare class FusionLayout2 {
    activeSeries?: Series;
    createLayout(event: {
        btnTarget: HTMLElement;
        events?: Event;
        forceRender?: boolean;
    }, matchFusionSeries?: Array<Series>): void;
}
export default FusionLayout2;
