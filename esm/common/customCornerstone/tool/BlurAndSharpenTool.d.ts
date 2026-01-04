declare const BaseTool: any;
/**
 * @public
 * @class BlurAndSharpen
 * @memberof Tools
 *
 * @classdesc Tool for blurAndSharpen the image.
 * @extends Tools.Base.BaseTool
 */
export default class BlurAndSharpenTool extends BaseTool {
    updateCavansLazy: any;
    constructor(props?: {});
    updateCavans(evt: any): Promise<void>;
    enabledCallback(element: HTMLElement): void;
    disabledCallback(element: HTMLElement): void;
    forceImageUpdate(element: HTMLElement): void;
    isCleanCanvas(): boolean;
    renderToolData(evt: any): Promise<void>;
}
export {};
