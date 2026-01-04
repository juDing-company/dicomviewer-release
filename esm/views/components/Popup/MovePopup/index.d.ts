/** @prettier  */
import Popup, { Options as _Options } from '..';
import './index.less';
export interface Options extends _Options {
    minimization: {
        icon: string;
        onchange?: (toggle: boolean) => void;
    };
}
export declare class MovePopup extends Popup {
    stickyBarEl?: HTMLElement;
    options: Options;
    minimization: boolean;
    constructor(titleText: string, body: string | HTMLElement, options: Options);
    private isMove;
    private setPopupPosition;
    private createMinimizationLayout;
    minimizationHandle(toggle: boolean, onchange?: (toggle: boolean) => void): void;
}
export default MovePopup;
