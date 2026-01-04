import type { MPRRunOptions } from '@/views/MPR/index.d';
declare class IntelGPULayout {
    toastDict: any;
    get disTips(): boolean | null;
    set disTips(value: boolean);
    createLayout(options: {
        seriesData?: MPRRunOptions['seriesData'];
        force?: boolean;
    }): Promise<null | string>;
}
export default IntelGPULayout;
