import { MPRRunOptions } from './index.d';
import type { RenderingEngine, Types } from '@cornerstonejs/core';
export declare const volumeLoaderScheme = "cornerstoneStreamingImageVolume";
export declare const renderingEngineId = "myRenderingEngine";
export declare const ctVoiSynchronizerId = "CT_VOI_SYNCHRONIZER_ID";
export declare const ptVoiSynchronizerId = "PT_VOI_SYNCHRONIZER_ID";
export declare const futionVoiSynchronizerId = "FUTION_VOI_SYNCHRONIZER_ID";
export declare const volumeVoiSynchronizerId = "VOLUME_VOI_SYNCHRONIZER_ID";
export declare const axialCameraSynchronizerId = "AXIAL_CAMERA_SYNCHRONIZER_ID";
export declare const sagittalCameraSynchronizerId = "SAGITTAL_CAMERA_SYNCHRONIZER_ID";
export declare const coronalCameraSynchronizerId = "CORONAL_CAMERA_SYNCHRONIZER_ID";
export declare const ctVolumeName = "CT_VOLUME_ID";
export declare const ptVolumeName = "PT_VOLUME_ID";
export declare const ctVolumeId = "cornerstoneStreamingImageVolume:CT_VOLUME_ID";
export declare const ptVolumeId = "cornerstoneStreamingImageVolume:PT_VOLUME_ID";
export declare const ctToolGroupId = "CT_TOOLGROUP_ID";
export declare const ptToolGroupId = "PT_TOOLGROUP_ID";
export declare const fusionToolGroupId = "FUSION_TOOLGROUP_ID";
export declare const volume3DToolGroupId = "VOLUME_3D_TOOLGROUP_ID";
export declare const viewportIdsCT: string[];
export declare const viewportIdsPT: string[];
export declare const viewportIdsFusion: string[];
export declare const viewportIdVolume3D = "VOLUME_3D";
export declare const viewportIdGroupForVolume3D: {
    toolGroupId: string;
    viewportIds: string[];
    VOLUME_3D: string;
};
export declare const viewportIdGroup: {
    CT: {
        volumeName: string;
        volumeId: string;
        toolGroupId: string;
        viewportIds: string[];
        AXIAL: string;
        SAGITTAL: string;
        CORONAL: string;
    };
    PT: {
        volumeName: string;
        volumeId: string;
        toolGroupId: string;
        viewportIds: string[];
        AXIAL: string;
        SAGITTAL: string;
        CORONAL: string;
    };
    fusion: {
        toolGroupId: string;
        viewportIds: string[];
        AXIAL: string;
        SAGITTAL: string;
        CORONAL: string;
    };
};
export declare let container: HTMLDivElement;
export declare function setContainer(el: HTMLDivElement): void;
export declare let renderingEngine: RenderingEngine;
export declare function setRenderingEngine(data: RenderingEngine): void;
export declare let instanceOptions: MPRRunOptions;
export declare function setInstanceOptions(options: MPRRunOptions): void;
export declare let layoutType: 'ACS9' | 'coronal' | 'sagittal' | 'axial' | undefined | null;
export declare function setLayoutType(type: typeof layoutType): void;
export declare function getViewportGridMap(reset: boolean): {
    id: string;
    visibility?: (() => boolean) | boolean;
}[];
export declare function resetViewportGridMap(): {
    id: string;
    visibility?: (() => boolean) | boolean;
}[];
export declare let slabThicknessDefault: number;
export declare function setSlabThicknessDefault(value: number): void;
export declare let volume: Types.IStreamingImageVolume | null;
export declare function setVolume(value: Types.IStreamingImageVolume | null): void;
