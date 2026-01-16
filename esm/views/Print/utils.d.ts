import type { GridStackOptions } from 'gridstack';
import type { CustomLayout } from './store/customLayoutMap';
export declare function flat(index: string): number[];
export declare function generateSize(index: string): number[];
export declare function drawStudyInfo(target: HTMLElement, fontSize: number, padding: number): void;
export declare function copyCanvas(target: HTMLElement, singleW?: number, singleH?: number, options?: {
    orientation?: boolean;
    scaleOverlay?: boolean;
}): Promise<{
    canvas: HTMLCanvasElement;
    container: HTMLElement;
    destroy: Function;
}>;
export declare function gridStackOptionsPure(options: GridStackOptions): CustomLayout;
export declare function togglePrintToolsActive(force?: boolean): void;
export declare function clearToolsActive(): void;
export declare function renderLableItem(className: string, label: string, content: HTMLElement): HTMLDivElement | HTMLElement | HTMLTextAreaElement | HTMLInputElement | HTMLFormElement | HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement | HTMLUListElement | HTMLObjectElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLVideoElement;
