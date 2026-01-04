/** @prettier  */
interface ParamsPreset {
    mappingRange: [number, number];
    addPointPiecewise: [number, number][];
}
interface ParamsPresetMap {
    [key: number]: ParamsPreset;
}
declare const paramsPresetMap: ParamsPresetMap;
declare let paramsPreset: ParamsPreset;
declare const petColorMapMapping: {
    paramsPresetMap: ParamsPresetMap;
    addPreset: (name: string, preset: ParamsPreset) => void;
    getPreset: () => ParamsPreset;
    applyPreset: (name: keyof typeof paramsPresetMap) => void;
};
export { petColorMapMapping, paramsPreset };
