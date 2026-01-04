import AdvancedSegmentBaseTool from '../AdvancedSegmentBaseTool';
import type ToolGroup from '@cornerstonejs/tools/dist/esm/store/ToolGroupManager/ToolGroup';
interface ToolProps {
    overlap?: boolean;
    autoSegment?: boolean;
    controller?: boolean;
}
declare class BedboardSegment extends AdvancedSegmentBaseTool {
    static toolName: string;
    props: ToolProps;
    imageDataOverlap: any;
    toolGroups: ToolGroup[];
    toolbars: Array<{
        title: string;
        sider?: {
            min: number;
            max: number;
            step: number;
            defaultValue: number;
        };
        handler: (...args: any[]) => void;
    }>;
    constructor(props: ToolProps);
    protected init(): Promise<void>;
    controllerRender(): void;
    MenuControllerRender(event: {
        btnTarget: HTMLElement;
        events?: Event;
        forceRender?: boolean;
        range?: number;
    }): void;
    runSegment: (value: number) => Promise<void>;
    toolActive(): void;
    segmentRegister(): void;
    segmentVolumeRender: () => void;
    destroy(): void;
}
export default BedboardSegment;
