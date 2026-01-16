/** @prettier  */
import { ProbeTool } from 'cornerstone-tools';
import { Coord, InteractionType } from './index.d';
export default class ProbeCTTool extends ProbeTool {
    constructor(props?: {});
    createNewMeasurement(eventData: Record<string, any>): {
        visible: boolean;
        active: boolean;
        color: any;
        invalidated: boolean;
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
    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {Boolean}
     */
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType: InteractionType): boolean;
    renderToolData(evt: Record<string, any>): void;
    addNewMeasurement(evt: Record<string, any>, interactionType: InteractionType): void;
}
