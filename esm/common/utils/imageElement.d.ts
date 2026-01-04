/** @prettier  */
declare const mainImageContainerClassName = "layoutCellsInner";
declare const mainImageLayoutContainerClassName = "layoutImage";
declare const printImageContainerClassName = "grid-stack-item-content";
declare const stitchingContainerClassName = "stitching-stack";
declare function isMainImageContainer(el: HTMLElement): boolean;
declare function getMainImageContainer(el: HTMLElement): HTMLElement;
declare function getMainImagesContainer(el: HTMLElement): NodeListOf<HTMLElement>;
declare function isMainImageLayoutContainer(el: HTMLElement): boolean;
declare function getMainImagesLayoutContainer(el: HTMLElement): NodeListOf<HTMLElement>;
declare function getMainImageLayoutActiveContainer(el: HTMLElement): HTMLElement;
declare function isPrintImageContainer(el: HTMLElement): boolean;
declare function getPrintImageContainer(el: HTMLElement): HTMLElement;
declare function getPrintImagesContainer(el: HTMLElement): NodeListOf<HTMLElement>;
declare function isStitchingImageContainer(el: HTMLElement): boolean;
declare function getStitchingImageContainer(el: HTMLElement): HTMLElement;
declare function getStitchingImagesContainer(el: HTMLElement): NodeListOf<HTMLElement>;
export { mainImageContainerClassName, mainImageLayoutContainerClassName, printImageContainerClassName, stitchingContainerClassName, isMainImageContainer, getMainImageContainer, getMainImagesContainer, isMainImageLayoutContainer, getMainImagesLayoutContainer, getMainImageLayoutActiveContainer, isPrintImageContainer, getPrintImageContainer, getPrintImagesContainer, isStitchingImageContainer, getStitchingImageContainer, getStitchingImagesContainer, };
