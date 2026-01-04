/** @prettier  */
import { type Viewport } from 'cornerstone-core';
import type { Series, Study } from '@/dicom';
import type { Meta } from '@/common/metaData/index.d';
import type { AroundTagsConfigs } from '@/index.d';
declare class SeriesMarker {
    aroundTagsConfigs: AroundTagsConfigs;
    DICOMTags: {
        [key: string]: any;
    };
    defaultStyle: {
        position: string;
        pointerEvents: string;
        cursor: string;
        fontSize: string;
        maxWidth: string;
    };
    markerELs: ({
        name: string;
        style: {
            left: string;
            top: string;
            right?: undefined;
            bottom?: undefined;
        };
    } | {
        name: string;
        style: {
            right: string;
            top: string;
            left?: undefined;
            bottom?: undefined;
        };
    } | {
        name: string;
        style: {
            left: string;
            bottom: string;
            top?: undefined;
            right?: undefined;
        };
    } | {
        name: string;
        style: {
            right: string;
            bottom: string;
            left?: undefined;
            top?: undefined;
        };
    })[];
    static aroundTagsConfigsDefault: AroundTagsConfigs;
    constructor();
    createSeriesMarker(container: HTMLElement): void;
    createParagraph(container: HTMLElement, meta: Meta, viewport: Viewport, study: Study, series: Series): void;
    static getAroundTagsConfigsDefault(): AroundTagsConfigs;
}
export default SeriesMarker;
