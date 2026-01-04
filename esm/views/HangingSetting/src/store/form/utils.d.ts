import type { HangingSettingKey } from '@hs/index.d';
import type { Env, EnvWithoutApp } from '..';
import type { StoreApi } from 'zustand';
export interface EnvVar<EnvState> {
    app: EnvState;
    plat: EnvState;
    user: EnvState;
}
export interface EnvMutator<EnvState> {
    get: <T extends keyof EnvState>(key: T, env?: Env) => EnvState[T] | undefined;
    gets: (env?: Env) => EnvState;
    set: <T extends keyof EnvState>(key: T, value: EnvState[T], env: EnvWithoutApp, options?: {
        isSubmit?: boolean;
    }) => void;
    sets: (params: EnvState, env: EnvWithoutApp, options?: {
        isSubmit?: boolean;
    }) => void;
    submit: () => void;
}
export declare function createEnvStore<EnvState>(param: EnvState): {
    app: EnvState;
    plat: EnvState;
    user: EnvState;
};
export declare function createEnvMutator<EnvState, Store extends EnvVar<EnvState> & EnvMutator<EnvState>>(set: StoreApi<Store>['setState'], get: StoreApi<Store>['getState'], options: {
    fields: (keyof EnvState)[];
    nameSpace: HangingSettingKey;
}): EnvMutator<EnvState>;
