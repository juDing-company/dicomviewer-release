/** @prettier  */
import { LengthTool as _LengthTool } from 'cornerstone-tools';
import type { Coord, InteractionType } from './index.d';
export default class LengthTool extends _LengthTool {
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType: InteractionType): boolean;
    renderToolData(evt: Record<string, any>): void;
}
