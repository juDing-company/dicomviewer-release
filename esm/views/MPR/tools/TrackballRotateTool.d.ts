/** @prettier  */
import { TrackballRotateTool as _TrackballRotateTool } from '@cornerstonejs/tools';
import type { Types as TypesTools } from '@cornerstonejs/tools';
declare class TrackballRotateTool extends _TrackballRotateTool {
    constructor(toolProps?: TypesTools.PublicToolProps, defaultToolProps?: TypesTools.ToolProps);
    preMouseDownCallback: (evt: TypesTools.EventTypes.InteractionEventType) => Promise<boolean>;
}
export default TrackballRotateTool;
