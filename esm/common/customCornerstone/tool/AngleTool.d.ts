/** @prettier  */
import { AngleTool as _AngleTool } from 'cornerstone-tools';
import type { Coord, InteractionType } from './index.d';
import type { Image } from '@/index.d';
export default class AngleTool extends _AngleTool {
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType: InteractionType): boolean;
    updateCachedStats(image: Image, _element: HTMLElement, data: any): void;
    renderToolData(evt: Record<string, any>): void;
}
