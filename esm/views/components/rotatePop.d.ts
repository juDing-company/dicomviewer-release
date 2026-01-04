declare class RotatePop {
    data: Array<{
        title: string;
        name: string;
        icon: string;
    }>;
    constructor();
    createLayout(event: any): void;
    handleLayout(canvas: HTMLElement, rotateFlag: any): void;
}
export default RotatePop;
