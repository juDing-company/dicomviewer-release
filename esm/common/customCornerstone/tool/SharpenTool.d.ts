declare const BaseTool: any;
/**
 * @public
 * @class Sharpen
 * @memberof Tools
 *
 * @classdesc Tool for sharpen the image.
 * @extends Tools.Base.BaseTool
 */
export default class Sharpen extends BaseTool {
    constructor(props?: {});
    updateCavans(evt: any): Promise<void>;
    renderToolData(evt: any): any;
    _dragCallback(evt: any): void;
}
export {};
