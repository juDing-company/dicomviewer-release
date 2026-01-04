export interface Options {
    className?: string;
    layoutStyle?: Record<string, string | number>;
    mainStyle?: Record<string, string | number>;
    contentStyle?: Record<string, string | number>;
    overlay?: boolean;
    move?: boolean;
    close?: () => Promise<any> | void;
}
declare class Popup {
    layoutEl: HTMLElement;
    mainEl: HTMLElement;
    titleBarEl: HTMLElement;
    titleEl: HTMLElement;
    titleRightContentEl: HTMLElement;
    contentEl: HTMLElement;
    options?: Options;
    constructor(titleText: string, body: string | HTMLElement | undefined, options?: Options);
    remove(): void;
}
export default Popup;
