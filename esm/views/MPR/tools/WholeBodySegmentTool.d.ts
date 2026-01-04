import { WholeBodySegmentTool as _WholeBodySegmentTool } from '@cornerstonejs/tools';
import type { EventTypes, SVGDrawingHelper } from '@cornerstonejs/tools/dist/esm/types';
import type { Types } from '@cornerstonejs/core';
declare class WholeBodySegmentTool extends _WholeBodySegmentTool {
    preTouchStartCallback: (evt: EventTypes.MouseDownActivateEventType) => Promise<boolean>;
    preMouseDownCallback(evt: EventTypes.MouseDownActivateEventType): Promise<boolean>;
    private _endCallback;
    private runGrowCutHande;
    renderAnnotation(enabledElement: Types.IEnabledElement, svgDrawingHelper: SVGDrawingHelper): void;
    private _activateDraw;
    private _projectWorldPointAcrossSlices;
    private _getHorizontalLineIJKPoints;
    private _getHorizontalLineWorldPoints;
}
export default WholeBodySegmentTool;
