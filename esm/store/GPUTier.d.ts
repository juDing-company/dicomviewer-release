import { TierResult } from '@pmndrs/detect-gpu';
declare const GPUTier: {
    value: TierResult | undefined;
    get: () => Promise<any>;
    init: () => Promise<any>;
};
declare const isIntelGPU: () => Promise<boolean>;
declare const isBasicGPU: () => Promise<boolean>;
export { GPUTier, isIntelGPU, isBasicGPU };
