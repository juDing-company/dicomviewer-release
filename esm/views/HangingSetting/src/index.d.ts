import { WebDicomViewHangingBase, version } from '@hs/modules/WebDicomViewHangingBase';
import type { InstanceOptions } from './index.d';
declare class WebDicomViewHangingSetting extends WebDicomViewHangingBase {
    constructor(container: string | HTMLDivElement, options?: InstanceOptions);
}
export { WebDicomViewHangingSetting, version };
export default WebDicomViewHangingSetting;
