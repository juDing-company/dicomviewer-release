/** @prettier  */
import { MagnifyTool as _MagnifyTool } from 'cornerstone-tools';
export default class MagnifyTool extends _MagnifyTool {
    zoomCanvas?: HTMLCanvasElement;
    zoomElement?: HTMLElement;
    element?: HTMLElement;
    svgCursor: any;
    _addMagnifyingGlass(evt: Record<string, any>): void;
    _updateMagnifyingGlass(evt: Record<string, any>): void;
}
