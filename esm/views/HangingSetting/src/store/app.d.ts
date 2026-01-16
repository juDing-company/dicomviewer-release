import type WebDicomViewHangingSetting from '..';
import type { TabBar } from '../index.d';
interface State {
    instance: WebDicomViewHangingSetting;
    name: string;
    tabBar: TabBar;
}
interface Mutator {
    setInstance: (instance: WebDicomViewHangingSetting) => void;
    setTabBar: (tabBar?: TabBar) => void;
}
declare const useAppStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<State & Mutator>, "setState" | "persist"> & {
    setState(partial: (State & Mutator) | Partial<State & Mutator> | ((state: State & Mutator) => (State & Mutator) | Partial<State & Mutator>), replace?: false): unknown;
    setState(state: (State & Mutator) | ((state: State & Mutator) => State & Mutator), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<State & Mutator, any, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: State & Mutator) => void) => () => void;
        onFinishHydration: (fn: (state: State & Mutator) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<State & Mutator, any, unknown>>;
    };
}>;
declare const isPlatPriority: () => boolean;
export type { State };
export { useAppStore, isPlatPriority };
export default useAppStore;
