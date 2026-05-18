declare const BaseTool: any;
/**
 * @public
 * @class GraphicAnnotationTool
 * @memberof Tools
 *
 * @classdesc Tool for graphic annotation on the image.
 * @extends Tools.Base.BaseTool
 */
export default class GraphicAnnotationTool extends BaseTool {
    constructor(props?: {});
    enabledCallback(element: HTMLElement): void;
    disabledCallback(element: HTMLElement): void;
    forceImageUpdate(element: HTMLElement): void;
    renderToolData(evt: any): void;
}
export {};
