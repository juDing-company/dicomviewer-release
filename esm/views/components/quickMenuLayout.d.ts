interface EventProps {
    target?: HTMLElement;
    forceRender?: boolean;
    destroy?: boolean;
    events?: MouseEvent | TouchEvent;
    forceShow?: boolean;
}
declare class QuickMenuLayout {
    layout?: HTMLElement | null;
    className: string;
    constructor(event: EventProps);
    hideLayout(click?: boolean): void;
    setLeft(event: EventProps): void;
    destroy: () => void;
}
export default QuickMenuLayout;
