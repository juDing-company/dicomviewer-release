import type { Types } from '@cornerstonejs/core';
interface Preset {
    type: string;
    name?: string;
    preset?: Types.ViewportPreset;
    presetExtends?: Partial<Types.ViewportPreset>;
}
declare const viewportPresetsMap: Preset[];
declare const getPresetsForModality: (modality: string) => Preset[];
declare const getPresetsDefault: (modality: string) => Preset;
declare const getPreset: (type: string) => Types.ViewportPreset;
export { viewportPresetsMap, getPresetsForModality, getPreset, getPresetsDefault };
