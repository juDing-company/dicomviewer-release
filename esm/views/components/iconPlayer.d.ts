import { type Series } from '@/dicom';
declare class IconPlayer {
    elementPlayClip: HTMLElement;
    playData: Array<any>;
    playerStatus: boolean;
    iconControls: Array<HTMLElement>;
    eventNamespace: string;
    EVENTSHandle: Map<HTMLElement, EventListenerOrEventListenerObject>;
    enableColor: string;
    disableColor: string;
    framesPerSecond: number;
    t: {
        [key: string]: string;
    };
    constructor();
    createPlayer(container: HTMLElement, series: Series, frameRate?: number): void;
    getPlayerBarELs(): NodeListOf<Element>;
    addCanvasActiveEventLazy: {
        (...args: any[]): any;
        cancel: () => void;
        flush: () => any;
        pending: () => boolean;
    };
    addCanvasActiveEvent(): Promise<void>;
    removeCanvasActiveEvent(): void;
    playerToggle(status: boolean, element?: HTMLElement): void;
    playerStart(element?: HTMLElement): void;
    playerPause(element?: HTMLElement): void;
    playerAllPauseAndRemove(ignoreEL?: HTMLElement): Promise<void>;
    playerRemove(element?: HTMLElement, clearCache?: boolean): Promise<void>;
    playerBarClickHandle(params: any): Promise<void>;
    playerToggleHandle(iconElement: HTMLElement, status?: boolean): void;
    togglePalyerTool(toggle: boolean): Promise<void>;
    toggleControlStyle(index: number, imagesPages: number): void;
    toggleControlStyleLazy: {
        (...args: any[]): any;
        cancel: () => void;
        flush: () => any;
        pending: () => boolean;
    };
}
export default IconPlayer;
