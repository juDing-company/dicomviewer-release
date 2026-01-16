import type { EnvMutator, EnvVar } from './utils';
type Postion = 'LT' | 'RT' | 'BT';
interface ModalityGrid {
    modality: string;
    series: {
        x: number;
        y: number;
    };
    image: {
        x: number;
        y: number;
    };
}
type EnvState = Partial<{
    modalityGrids: ModalityGrid[];
    navMenu: Postion;
    navMenuMobile: Exclude<Postion, 'RT'>;
}>;
type State = EnvVar<EnvState>;
interface Mutator extends EnvMutator<EnvState> {
    getNavMnenu: () => EnvState['navMenu'] | EnvState['navMenuMobile'];
    isEqualNavMnenu: (nav: 'L' | 'R' | 'B', menu?: 'T') => boolean;
    getNavMenuOptions: () => {
        label: string;
        value: Postion;
    }[];
}
declare const useLayoutStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<State & Mutator>, "setState" | "persist"> & {
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
declare const isEqualNavMnenu: (nav: "L" | "R" | "B", menu?: "T") => boolean;
export type { State, EnvState as LayoutEnvState, ModalityGrid };
export { useLayoutStore, isEqualNavMnenu };
export default useLayoutStore;
