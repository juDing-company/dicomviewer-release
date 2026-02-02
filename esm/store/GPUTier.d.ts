import { TierResult } from 'detect-gpu';
declare const GPUTier: {
    value: TierResult | undefined;
    get: () => Promise<any>;
    init: () => Promise<any>;
};
declare const isIntelGPU: () => Promise<boolean>;
export { GPUTier, isIntelGPU };
