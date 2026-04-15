import type { RenderingEngine } from '@cornerstonejs/core';
import type { IVolumeViewport, VOIRange } from '@cornerstonejs/core/types';
interface Props {
    viewportId: string;
    container: HTMLElement;
    renderingEngine: RenderingEngine;
}
declare class VOISlider {
    viewport: IVolumeViewport;
    VOIRangeDefault?: VOIRange;
    isDragging?: boolean;
    viewportId: string;
    container: HTMLElement;
    thumb?: HTMLElement;
    renderingEngine: RenderingEngine;
    private VOTListener;
    constructor(props: Props);
    private VOTChangeEventListener;
    setSliderValue(percentage: number): void;
    reset(): void;
    destroy(): void;
    render(): void;
}
export default VOISlider;
