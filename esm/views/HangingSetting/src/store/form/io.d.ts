import type { HangingSetting, HangingSettingKey, HangingSettingTypeEnum, OnSubmitType } from '@hs/index.d';
import type { Env } from '..';
interface State {
    onSubmit: OnSubmitType;
}
interface Mutator {
    setOnSubmit: (onSubmit?: OnSubmitType) => void;
    submit: (params: HangingSettingTypeEnum, nameSpace: HangingSettingKey) => void;
    getAllConfig: (env?: Env) => HangingSetting;
    input: (params?: HangingSetting) => void;
}
declare const useIOStore: import("zustand").UseBoundStore<import("zustand").StoreApi<State & Mutator>>;
export type { State };
export { useIOStore };
export default useIOStore;
