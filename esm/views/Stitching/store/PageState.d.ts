import type { Image } from 'cornerstone-core';
export interface State {
    image: Image;
    imageId: string;
    ID: number;
    top?: number;
    index?: number;
}
declare class PageState {
    states: State[];
    imageBenchmark: Image;
    constructor();
    addImage(target: HTMLElement): void;
    setImage(target: HTMLElement, index: number): void;
    updateImage(target: HTMLElement | number, params: Partial<State>): void;
    clearImage(): void;
    removeImage(index: number): void;
    getImages(): State[];
    sortImages(): void;
    renderImagesIndex(callbackfn?: (v: State, i: number) => void): void;
    swapAdjacentImages(index: number, n: number): State[];
    gerneateState(target: HTMLElement, index: number): {
        image: Image;
        imageId: string;
        ID: number;
        index: number;
    };
    verifySource(image: Image): boolean;
}
export default PageState;
