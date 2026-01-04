import { Coord, InteractionType } from './index.d';
declare const BaseAnnotationTool: any;
/**
 * @public
 * @class AnnHeartRatio
 * @memberof Tools.Annotation
 * @classdesc Tool for measuring distances.
 * @extends Tools.Base.BaseAnnotationTool
 */
export default class AnnHeartRatioTool extends BaseAnnotationTool {
    throttledUpdateCachedStats: (...any: any[]) => void;
    configuration: any;
    constructor(props?: {});
    createNewMeasurement(eventData: any): {
        visible: boolean;
        active: boolean;
        color: any;
        invalidated: boolean;
        handles: {
            start: {
                x: any;
                y: any;
                highlight: boolean;
                active: boolean;
            };
            end: {
                x: any;
                y: any;
                highlight: boolean;
                active: boolean;
            };
            start2: {
                x: number;
                y: number;
                highlight: boolean;
                active: boolean;
            };
            end2: {
                x: number;
                y: number;
                highlight: boolean;
                active: boolean;
            };
            start3: {
                x: number;
                y: number;
                drawnIndependently: boolean;
                highlight: boolean;
                active: boolean;
            };
            end3: {
                x: number;
                y: number;
                drawnIndependently: boolean;
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
    updateCachedStats(image: any, element: any, data: any): void;
    renderToolData(evt: any): void;
}
export {};
