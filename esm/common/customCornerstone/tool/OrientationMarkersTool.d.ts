declare const BaseTool: any;
/**
 * @public
 * @class OrientationMarkersTool
 * @memberof Tools
 *
 * @classdesc Tool for orientationMarkers on the image.
 * @extends Tools.Base.BaseTool
 */
export default class OrientationMarkersTool extends BaseTool {
    constructor(props?: {});
    enabledCallback(element: HTMLElement): void;
    disabledCallback(element: HTMLElement): void;
    forceImageUpdate(element: HTMLElement): void;
    renderToolData(evt: any): void;
}
export {};
