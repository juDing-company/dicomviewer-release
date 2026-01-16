import { type WWWCMenuItem } from '@hs/store/form/other';
type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type WWWCMenuOptional = OptionalKeys<WWWCMenuItem, 'WW' | 'WC'>;
declare class WWWCLayout {
    customItem: WWWCMenuOptional;
    data: Array<WWWCMenuOptional>;
    constructor();
    createLayout(event: any): void;
    triggerEvent(data: WWWCMenuOptional): void;
    getWindowRange(data: WWWCMenuItem): Promise<number[]>;
    setViewport(canvas: HTMLElement, data: WWWCMenuItem): Promise<void>;
}
export default WWWCLayout;
