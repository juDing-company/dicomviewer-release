import _WholeBodySegmentTool from '@/views/MPR/tools/WholeBodySegmentTool';
import type { SVGDrawingHelper } from '@cornerstonejs/tools/dist/esm/types';
import type { Types } from '@cornerstonejs/core';
declare class BedboardSegmentTool extends _WholeBodySegmentTool {
    runSegment: {
        (...args: any[]): any;
        cancel: () => void;
        flush: () => any;
        pending: () => boolean;
    };
    renderAnnotation(enabledElement: Types.IEnabledElement, svgDrawingHelper: SVGDrawingHelper): void;
}
export default BedboardSegmentTool;
