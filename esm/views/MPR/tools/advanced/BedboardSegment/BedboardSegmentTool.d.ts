import { WholeBodySegmentTool } from '@/views/MPR/tools';
import type { SVGDrawingHelper } from '@cornerstonejs/tools/dist/esm/types';
import type { Types } from '@cornerstonejs/core';
declare class BedboardSegmentTool extends WholeBodySegmentTool {
    runSegment: {
        (...args: any[]): any;
        cancel: () => void;
        flush: () => any;
        pending: () => boolean;
    };
    renderAnnotation(enabledElement: Types.IEnabledElement, svgDrawingHelper: SVGDrawingHelper): void;
}
export default BedboardSegmentTool;
