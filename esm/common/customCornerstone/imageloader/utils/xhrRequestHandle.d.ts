declare const xhrRequestHandle: (url: string, imageId: string, defaultHeaders?: {}, params?: Record<string, any>) => Promise<ArrayBuffer>;
export default xhrRequestHandle;
