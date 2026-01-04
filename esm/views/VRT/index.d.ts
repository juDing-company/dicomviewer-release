import { type OpenOptions } from './vrt';
declare const destroyVRT: () => void;
declare const bindEvents: () => void;
export { bindEvents, destroyVRT as destroy };
declare const _default: (parentElement: HTMLDivElement, options: OpenOptions) => void;
export default _default;
