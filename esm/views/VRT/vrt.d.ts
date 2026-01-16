import LoadingAnimation from '@/common/utils/LoadingAnimation';
import DicomLayoutView from '../DicomLayoutView';
type Events = TouchEvent | MouseEvent;
type toolType = 'KnifeIn' | 'KnifeOut' | 'Modulation' | 'Rotate';
export interface OpenOptions {
    VRTWSURL: string;
    wadoURL: string;
    hospID: string;
    studyUID: string;
    seriesUID: string;
    layoutView: DicomLayoutView;
}
declare class VRT {
    canvas?: HTMLCanvasElement;
    ptLast: {
        x: number;
        y: number;
    };
    webDcmSocket: WebSocket;
    webDcmSocketResult?: string;
    resizeObserver?: ResizeObserver;
    seriesUID?: string;
    which?: 1 | 2 | 3;
    toolType?: toolType;
    knifeFinishCallback?: () => void;
    zoomLazy: (event: Events | HammerInput) => void;
    KnifeMoveLazy: (event: Events) => void;
    rotateLazy: (event: Events) => void;
    windowsLevelLazy: (event: Events) => void;
    panLazy: (event: Events | HammerInput) => void;
    loadingAnimation: LoadingAnimation;
    t: any;
    constructor();
    open(parentElement: HTMLDivElement, options: OpenOptions): void;
    resizeCanvasDrawImage(): void;
    msgTransform(event: Events): void;
    mouseDownMove(event: Events): void;
    mouseUp(): void;
    errorHandle(toolName: string, error: any): void;
    getPosition(event: Events): Promise<{
        LastPosition: number[];
        NowPosition: number[];
        rect: DOMRect;
    }>;
    rotate(event: Events): Promise<void>;
    pan(event: HammerInput): Promise<void>;
    zoom(event: HammerInput): void;
    windowsLevel(event: Events): Promise<void>;
    KnifeMove(event: Events): Promise<void>;
    toolsToggle(toolTag: toolType): void;
    knifeBegin(toolTag: 'KnifeIn' | 'KnifeOut', callback?: () => void): void;
    knifeEnd(): void;
    reset(): void;
    refresh(): void;
    webDcmSocketClose(): void;
    webDcmSocketSend(params: {
        Cmd: number;
        LastPosition?: number[];
        NowPosition?: number[];
        DeltaY?: -1 | 1;
        ViewWidth?: number;
        ViewHeight?: number;
    }): void;
    reconnect(): void;
    destroy(): void;
}
export default VRT;
