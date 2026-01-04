import type { Series } from '@/dicom';
export interface FusionData {
    [key: string]: Series;
}
declare class FusionLayout {
    activeSeries?: Series;
    activeSeries2?: Series;
    confirmSeries: FusionData;
    toastDict: any;
    formData: () => {
        label: any;
        type: string;
        seriesArr: Series[];
    }[];
    createLayout(currentSeries: Series): Promise<null | FusionData>;
}
export default FusionLayout;
