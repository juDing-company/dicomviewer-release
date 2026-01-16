/** @prettier  */
import { Image } from 'cornerstone-core';
import type { Viewport } from '@/index.d';
export default function renderElement(image: Image, singleW?: number, singleH?: number, options?: {
    orientation?: boolean;
    scaleOverlay?: boolean;
    viewport?: Viewport;
}): Promise<{
    canvas: HTMLCanvasElement;
    container: HTMLElement;
    destroy: Function;
}>;
