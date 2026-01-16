import type { EnvMutator, EnvVar } from './utils';
import type { ToolData } from '@/store/toolDataOrigin';
import type { Key } from 'react';
type ToolDataFlat = Omit<ToolData, 'children'>;
type EnvState = Partial<{
    selectKeys: string[];
}>;
interface State extends EnvVar<EnvState> {
    _source: ToolData[];
    _sourceFlat: ToolDataFlat[];
}
interface Mutator extends EnvMutator<EnvState> {
    getQuickMenuData: () => (ToolDataFlat | undefined)[];
    getSource: () => ToolData[];
    getSourceFlat: () => ToolDataFlat[];
}
declare const generateTree: (treeNodes?: ToolData[], checkedKeys?: Key[]) => ToolData[];
declare const useQuickMenuStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<State & Mutator>, "setState" | "persist"> & {
    setState(partial: (State & Mutator) | Partial<State & Mutator> | ((state: State & Mutator) => (State & Mutator) | Partial<State & Mutator>), replace?: false): unknown;
    setState(state: (State & Mutator) | ((state: State & Mutator) => State & Mutator), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<State & Mutator, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: State & Mutator) => void) => () => void;
        onFinishHydration: (fn: (state: State & Mutator) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<State & Mutator, unknown, unknown>>;
    };
}>;
export type { State, EnvState as QuickMenuEnvState, ToolDataFlat };
export { useQuickMenuStore, generateTree };
export default useQuickMenuStore;
