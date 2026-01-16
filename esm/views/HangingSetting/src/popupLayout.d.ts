import Popup from '@/views/components/Popup/index';
import type WebDicomViewHangingSetting from '.';
export declare class HangingSettingLayout {
    private _isInit;
    popup?: Popup;
    hangingSetting?: WebDicomViewHangingSetting;
    get isInit(): boolean;
    private set isInit(value);
    private isChange;
    initLayout(): Promise<void>;
    close(): Promise<void>;
    destroy(): void;
}
export default HangingSettingLayout;
