declare const BaseTool: any;
export default class CrosshairsTool extends BaseTool {
    synchronizationContext: any;
    debounceClear: any;
    stackEEventListener: any;
    postTouchStartCallback: any;
    postMouseDownCallback: any;
    touchDragCallback: any;
    mouseDragCallback: any;
    touchEndCallback: any;
    mouseUpCallback: any;
    constructor(props?: {});
    clear(): void;
    updateImages(): void;
    renderToolData(evt: any): void;
    activeCallback(_element: HTMLElement, { synchronizationContext }: {
        synchronizationContext: any;
    }): void;
    _chooseLocation(evt: any): void;
    _downCallback(evt: any): void;
}
export {};
