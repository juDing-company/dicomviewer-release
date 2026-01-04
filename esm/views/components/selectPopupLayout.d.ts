import type { ToolData } from '@/store/toolDataOrigin';
interface Callback {
    (params: any): void;
}
interface EventProps {
    btnTarget: HTMLElement;
    _layout?: HTMLElement;
    forceRender?: boolean;
    destroy?: boolean;
    events?: Event;
    isMenuNest?: boolean;
    forceShow?: boolean;
    direction?: 'top' | 'bottom';
    toolData?: ToolData;
}
declare class SelectPopupLayout {
    layout?: HTMLElement | null;
    className: string;
    timer?: NodeJS.Timeout;
    constructor(classNameCopilot: string, event: EventProps, createCallback: Callback, createdCallback?: Callback);
    mouseleaveHandle(): void;
    mouseenterHandle(): void;
    hideLayout(click?: boolean): void;
    setLeft(event: EventProps): void;
    destroy(): void;
}
export default SelectPopupLayout;
