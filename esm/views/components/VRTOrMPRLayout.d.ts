type IDName = 'VRTContent' | 'MPRContent';
declare class VRTOrMPRLayout {
    id: IDName;
    ElementContent?: HTMLDivElement;
    constructor(id: IDName);
    createLayout(): HTMLDivElement;
    hidden(): void;
}
export default VRTOrMPRLayout;
