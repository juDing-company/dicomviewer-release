import type { StudyQuery } from '@/index.d';
declare function downloadToolsData({ studyUID, hospID, departCode }: StudyQuery, toolPassive?: boolean, _updateImage?: boolean): Promise<void>;
declare function downloadAllToolsData(_updateImage?: boolean): Promise<void>;
declare function uploadToolsData(): Promise<void>;
export { downloadToolsData, downloadAllToolsData, uploadToolsData };
