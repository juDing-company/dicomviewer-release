declare class IconSynchronizer {
    t: {
        [key: string]: any;
    };
    className: string;
    constructor();
    createIconSynchronizer(canvasContainer: HTMLElement, synchronizerStatus?: boolean): void;
    createIconSynchronizers(): Promise<void>;
    triggerEventHandle(canvasContainer: HTMLElement, checked?: boolean): void;
    removeSynchronizer(canvasContainer: HTMLElement): void;
}
export default IconSynchronizer;
