import AdvancedBaseTool from './AdvancedBaseTool';
import type { Types } from '@cornerstonejs/core';
declare class AdvancedSegmentBaseTool extends AdvancedBaseTool {
    segmentationVolume?: Types.IImageVolume;
    get segmentationId(): string;
    getSegmentationVolume(segmentationId?: string): Types.IImageVolume | undefined;
    clearSegmentation(segmentationId?: string): void;
    destroy(): void;
}
export default AdvancedSegmentBaseTool;
