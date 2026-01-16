import { Coord, InteractionType } from './index.d';
declare const BaseAnnotationTool: any;
/**
 * @public
 * @class AIRoiTool
 * @memberof Tools.Annotation
 * @classdesc Tool for drawing rectangular regions of interest, and measuring
 * the statistics of the enclosed pixels.
 * @extends Tools.Base.BaseAnnotationTool
 */
export default class AITool extends BaseAnnotationTool {
    constructor(props?: {});
    activeCallback(element: HTMLElement): void;
    passiveCallback(element: HTMLElement): void;
    enabledCallback(element: HTMLElement): void;
    disabledCallback(element: HTMLElement): void;
    forceImageUpdate(element: HTMLElement): void;
    createNewMeasurement(): void;
    updateCachedStats(): void;
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType: InteractionType): any;
    renderToolData(evt: Record<string, any>): void;
}
export {};
