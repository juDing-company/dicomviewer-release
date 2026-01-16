/** @prettier  */
import { Root } from 'react-dom/client';
import type { InstanceOptions } from '../index.d';
import type { Env } from '@hs/store/index.d';
import '@hs/assets/css/tailwindcss.css';
import '@hs/assets/css/global.less';
declare class WebDicomViewHangingBase {
    reactDOMRoot: Root;
    container: HTMLDivElement;
    options: InstanceOptions;
    constructor(container: string | HTMLDivElement, options?: InstanceOptions);
    init(app: React.ReactNode): void;
    updateCvh(): void;
    destroy(): void;
    checkRoot(): void;
    setLanguage(): void;
    setTheme(): void;
    setOnSubmit(): void;
    setHangingSetting(): void;
    setInstance(): void;
    setTabBar(): void;
    getAllConfig: typeof WebDicomViewHangingBase._getAllConfig;
    static _getAllConfig(env?: Env): import("../index.d").HangingSetting;
    static getAllConfigDefault(): import("../index.d").HangingSetting;
    getHangingSettingDefault: typeof WebDicomViewHangingBase.getAllConfigDefault;
    static getHangingSettingDefault: typeof WebDicomViewHangingBase.getAllConfigDefault;
    getThemeConfig: (_varTheme?: import("@/index").Theme) => import("@hs/store/theme").ThemeConfig;
    static getThemeConfig: (_varTheme?: import("@/index").Theme) => import("@hs/store/theme").ThemeConfig;
}
declare const version: any;
export { WebDicomViewHangingBase, version };
export default WebDicomViewHangingBase;
