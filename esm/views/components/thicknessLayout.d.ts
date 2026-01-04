declare class ThicknessLayout {
    createLayout(event: {
        btnTarget: HTMLElement;
        events?: Event;
        forceRender?: boolean;
    }, thickness?: number, slabThicknessDefault?: number): void;
}
export default ThicknessLayout;
