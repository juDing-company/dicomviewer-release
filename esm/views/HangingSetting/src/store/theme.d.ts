import type { Theme } from '@/index.d';
import type { ThemeConfig } from 'antd';
interface State {
    _var: Theme;
    config: ThemeConfig;
}
interface Mutator {
    setThemeVar: (theme?: Theme, container?: HTMLElement) => void;
    setThemeConfig: (config?: ThemeConfig) => void;
}
declare const getThemeConfig: (_varTheme?: Theme) => ThemeConfig;
declare const useThemeStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Mutator>>;
export type { Theme, ThemeConfig };
export { useThemeStore, getThemeConfig };
export default useThemeStore;
