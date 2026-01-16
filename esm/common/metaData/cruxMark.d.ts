interface CruxMarkInfo {
    enable: boolean;
    description: string;
    imageUID?: string;
    seriesUID?: string;
    studyUID?: string;
}
interface Store {
    [studyUID: string]: {
        [imageUID: string]: CruxMarkInfo;
    };
}
declare function get(element: HTMLElement): CruxMarkInfo;
declare function set(element: HTMLElement, data: CruxMarkInfo): void;
declare function clear(element: HTMLElement): void;
declare function restore(data?: Store): void;
declare function downloadKeyImageData(studyUID: string, _updateImage?: boolean): Promise<void>;
declare function downloadAllKeyImageData(_updateImage?: boolean): Promise<void>;
declare function uploadKeyImageData(): Promise<void>;
export { downloadKeyImageData, downloadAllKeyImageData, uploadKeyImageData };
export { get as getCruxMarkInfo, set as setCruxMarkInfo, clear, restore };
