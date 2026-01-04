import type { AroundTagsConfig, ParseMarkerParams, TagsConfigItem } from '@/index.d';
declare function parseMarker(item: TagsConfigItem, params: ParseMarkerParams, DICOMTags?: any): {
    label: any;
    value: any;
};
declare function parseMarkers(aroundTagsConfig: AroundTagsConfig, params: ParseMarkerParams, itemCallback: (label: string, value: string, item: TagsConfigItem, markerKey: string, index: number) => void, reverse?: boolean): void;
export { parseMarkers, parseMarker };
