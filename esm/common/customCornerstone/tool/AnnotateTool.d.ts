/** @prettier  */
import { ArrowAnnotateTool } from 'cornerstone-tools';
import type { Coord, InteractionType } from './index.d';
export default class AnnotateTool extends ArrowAnnotateTool {
    constructor(props?: {});
    createNewMeasurement(evt: Record<string, any>): {
        visible: boolean;
        active: boolean;
        color: any;
        handles: {
            end: {
                x: any;
                y: any;
                highlight: boolean;
                active: boolean;
            };
            textBox: {
                active: boolean;
                hasMoved: boolean;
                movesIndependently: boolean;
                drawnIndependently: boolean;
                allowedOutsideImage: boolean;
                hasBoundingBox: boolean;
            };
        };
    };
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType: InteractionType): boolean;
    renderToolData(evt: Record<string, any>): void;
    addNewMeasurement(evt: Record<string, any>, interactionType: InteractionType): void;
}
