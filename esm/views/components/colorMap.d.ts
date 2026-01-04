declare class ColorMap {
    data: {
        id: string;
        name: string;
        icon: any;
    }[];
    createLayout(event: any): void;
    handleLayout(canvas: HTMLElement, colorFlag: any): void;
}
export default ColorMap;
