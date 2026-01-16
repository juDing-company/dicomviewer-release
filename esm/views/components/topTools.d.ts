import type { ToolData } from '@/store/toolDataOrigin';
declare class TopTools {
    eventTrigger: any;
    EVENTS: any;
    constructor();
    createTopTools(parentContainer: HTMLElement, toolsData: ToolData[], toolDefault: (ToolData & {
        delay?: number;
    }) | undefined, className?: string, force?: boolean): void;
    disableAllTool(): void;
    rectangleRoiTools(): void;
    ellipticalRoiTools(): void;
    circleRoiTools(): void;
    lengthTools(): void;
    eraserTools(): void;
    angleTools(): void;
    cobbAngleTools(): void;
    rotateTool(): void;
    zoomTool(): void;
    magnifyTool(): void;
    modulationTool(): void;
    stackScrollTool(): void;
    sharpenTool(): void;
    blurTool(): void;
    blurAndSharpenTool(toolTag: string, toolType: string, element: HTMLElement): void;
    panTool(): void;
    freehandRoiTool(): void;
    probeCTTool(): void;
    arrowAnnotateTool(): void;
    annotateTool(): void;
    LRMarkerTool(markerFlag: string): void;
    heartratioTool(): void;
    AITool(status?: boolean): void;
    cancelTool(element: HTMLElement, forceUpdate?: boolean): void;
    cancelToolAndDefaultViewportTools(elements: HTMLElement[] | 'all', restoreToolState?: boolean, restoreKeyImageState?: boolean): Promise<void>;
}
export default TopTools;
