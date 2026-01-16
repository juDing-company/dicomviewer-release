/** @prettier  */
import SelectPopupLayout from '@/views/components/selectPopupLayout';
export interface ToolProps {
    [key: string]: any;
}
declare class AdvancedBaseTool {
    static toolName: string;
    props: ToolProps;
    menuController?: SelectPopupLayout;
    get toolName(): string;
    constructor(props?: ToolProps);
    protected init(): Promise<void>;
    destroy(): void;
}
export default AdvancedBaseTool;
