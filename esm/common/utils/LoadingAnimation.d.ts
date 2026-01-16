import { IziToastSettings } from 'izitoast/types/index.d';
declare class LoadingAnimation {
    messageEl?: HTMLElement;
    progressBar?: HTMLElement;
    options: IziToastSettings;
    loading: boolean;
    constructor(options?: IziToastSettings);
    show(options?: IziToastSettings): void;
    progress(options?: IziToastSettings): Promise<import("izitoast").IziToastProgress>;
    hidden(): void;
    updateMessage(message: string): void;
    customProgress(value: number): void;
    $toast(): HTMLDivElement;
    iziToast: import("izitoast").IziToast;
}
declare const loadingAnimation: LoadingAnimation;
export { loadingAnimation };
export default LoadingAnimation;
