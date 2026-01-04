/** @prettier  */
import { ArrowAnnotateTool as _ArrowAnnotateTool } from 'cornerstone-tools';
import type { Coord, InteractionType } from './index.d';
export default class ArrowAnnotateTool extends _ArrowAnnotateTool {
    constructor(props?: {});
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType?: InteractionType): boolean;
    renderToolData(evt: Record<string, any>): void;
}
