import type { Types } from '@cornerstonejs/core';
import AdvancedBaseTool from './AdvancedBaseTool';
declare class AdvancedSegmentBaseTool extends AdvancedBaseTool {
    segmentationVolume?: Types.IImageVolume;
    get segmentationId(): string;
    getSegmentationVolume(segmentationId?: string): import("@cornerstonejs/core").ImageVolume | import("@cornerstonejs/core/dist/esm/cache/classes/BaseStreamingImageVolume").BaseStreamingImageVolume;
    clearSegmentation(segmentationId?: string): void;
    destroy(): void;
}
export default AdvancedSegmentBaseTool;
