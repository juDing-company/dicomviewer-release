import { WholeBodySegmentTool } from '@/views/MPR/tools';
import type { Types } from '@cornerstonejs/core';
import type { SVGDrawingHelper } from '@cornerstonejs/tools/types';
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
