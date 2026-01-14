import { WindowLevelTool as _WindowLevelTool } from '@cornerstonejs/tools';
import type { Types as csTypes } from '@cornerstonejs/core';
import type { Types } from '@cornerstonejs/tools';
declare class WindowLevelTool extends _WindowLevelTool {
    mouseDragCallback(evt: Types.EventTypes.InteractionEventType): void;
    _getMultiplierFromDynamicRange(viewport: csTypes.IVolumeViewport, volumeId: string): number;
}
export default WindowLevelTool;
