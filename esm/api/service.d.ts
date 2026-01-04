interface ToastParams {
    message: string;
    duration?: number;
    [params: string]: any;
}
export declare const toast: (params: ToastParams) => void;
declare const service: import("axios").AxiosInstance;
export default service;
