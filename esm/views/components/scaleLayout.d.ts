export interface ScaleLayoutDataItem {
    title: string;
    name: string;
}
declare class ScaleLayout {
    t: any;
    data: Array<ScaleLayoutDataItem>;
    constructor();
    createLayout(event: any): void;
    handleLayout(canvas: HTMLElement, flag: ScaleLayoutDataItem): Promise<void>;
}
export default ScaleLayout;
