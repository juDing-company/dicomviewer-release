import type { EnvMutator, EnvVar } from './utils';
import type { AroundTagsConfigs, TagsConfigItem, AroundTagsConfig } from '@/index.d';
type EnvState = Partial<{
    configs: AroundTagsConfigs;
    source: TagsConfigItem[];
}>;
type State = EnvVar<EnvState>;
type Mutator = EnvMutator<EnvState>;
declare const useAroundTagsStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<State & Mutator>, "setState" | "persist"> & {
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
export type { State, EnvState as AroundTagsEnvState, TagsConfigItem, AroundTagsConfig, AroundTagsConfigs };
export { useAroundTagsStore, tagRenderString };
export default useAroundTagsStore;
declare function tagRenderString(key: string, value: any): any;
