/** @prettier  */
import { CobbAngleTool as _CobbAngleTool } from 'cornerstone-tools';
import type { Coord, InteractionType } from './index.d';
import type { Image } from '@/index.d';
export default class CobbAngleTool extends _CobbAngleTool {
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType: InteractionType): boolean;
    updateCachedStats(image: Image, element: HTMLElement, data: Record<string, any>): void;
    renderToolData(evt: Record<string, any>): void;
    textBoxText({ rAngle, lAngle2 }: {
        rAngle?: number;
        lAngle2?: number;
    }, rowPixelSpacing: number, colPixelSpacing: number): string;
}
