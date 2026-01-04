declare const BaseTool: any;
/**
 * @public
 * @class Blur
 * @memberof Tools
 *
 * @classdesc Tool for blur the image.
 * @extends Tools.Base.BaseTool
 */
export default class Blur extends BaseTool {
    constructor(props?: {});
    updateCavans(evt: any): Promise<void>;
    renderToolData(evt: any): any;
    _dragCallback(evt: any): void;
}
export {};
