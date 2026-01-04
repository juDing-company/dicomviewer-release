/** @prettier  */
import { Image, Viewport } from 'cornerstone-core';
import type { CustomLayout } from './customLayoutMap';
export interface State {
    viewport: Viewport;
    image: Image;
    canvas: HTMLCanvasElement;
    imageId: string;
    index?: number;
}
declare class PageState {
    states: State[];
    pages: {
        index: number;
        defaultLayout: CustomLayout;
        layouts: CustomLayout[];
    };
    constructor();
    addImage(target: HTMLElement): void;
    setImage(target: HTMLElement, index: number): void;
    clearImage(): void;
    removeImage(index: number): void;
    pureImages(): void;
    getImages(index?: number): {
        images: State[];
        startIndex: number;
        endIndex: number;
        imagesLen: number;
    };
    gerneateState(target: HTMLElement, index: number): {
        viewport: Viewport;
        image: Image;
        canvas: HTMLCanvasElement;
        imageId: string;
        index: number;
    };
    setDefaultGridStackOptions(options: CustomLayout): void;
    setGridStackOptions(options: CustomLayout): void;
    getPageLayout(): CustomLayout;
    getLastPageIndex(): number;
    changPageIndex(options: {
        go?: number;
        index?: number;
        last?: boolean;
    }): number;
    verifyEmpty(): Promise<boolean>;
}
export default PageState;
