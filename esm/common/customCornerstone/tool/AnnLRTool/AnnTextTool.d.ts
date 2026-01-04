import { Coord, InteractionType } from '../index.d';
declare const BaseAnnotationTool: any;
interface Props {
    [params: string]: any;
}
export default class AnnLRTool extends BaseAnnotationTool {
    throttledUpdateCachedStats: (...any: any[]) => void;
    name: string;
    configuration: any;
    markerFlag: 'L' | 'R';
    constructor(props?: Props);
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
        };
    };
    pointNearTool(element: HTMLElement, data: any, coords: Coord, interactionType: InteractionType): boolean;
    updateCachedStats(image: any, element: any, data: any): void;
    renderToolData(evt: any): void;
}
export {};
