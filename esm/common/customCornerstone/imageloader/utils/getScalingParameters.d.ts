/** @prettier  */
import type { metaData as MetaData } from 'cornerstone-core';
export default function getScalingParameters(metaData: typeof MetaData, imageId: string): {
    suvbw: any;
    rescaleSlope: any;
    rescaleIntercept: any;
    modality: any;
};
