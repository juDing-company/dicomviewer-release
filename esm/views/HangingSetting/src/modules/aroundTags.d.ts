import { WebDicomViewHangingBase, version } from './WebDicomViewHangingBase';
import type { InstanceOptions } from '../index.d';
declare class WebDicomViewHangingAroundTags extends WebDicomViewHangingBase {
    constructor(container: string | HTMLDivElement, options?: InstanceOptions);
}
export { WebDicomViewHangingAroundTags, version };
export default WebDicomViewHangingAroundTags;
