declare function downloadToolsData(studyUID: string, toolPassive?: boolean, _updateImage?: boolean): Promise<void>;
declare function downloadAllToolsData(_updateImage?: boolean): Promise<void>;
declare function uploadToolsData(): Promise<void>;
export { downloadToolsData, downloadAllToolsData, uploadToolsData };
