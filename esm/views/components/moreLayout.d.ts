import { ToolData } from '@/store/toolDataOrigin';
declare class MoreLayout {
    constructor(event: {
        toolData: ToolData;
        btnTarget: HTMLElement;
        events?: Event;
        toolDefault?: ToolData;
        classNameCopilot?: string;
        isMenuNest?: boolean;
        forceRender?: boolean;
        destroy?: boolean;
    });
}
export default MoreLayout;
