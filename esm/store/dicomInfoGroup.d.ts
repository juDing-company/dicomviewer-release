interface DicomInfo {
    title: string;
    labels: Array<{
        title: string;
        alias?: string;
        format?: (...args: any[]) => any;
    }>;
}
declare const dicomInfoGroup: () => DicomInfo[];
export default dicomInfoGroup;
