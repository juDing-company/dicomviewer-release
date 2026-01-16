/** @prettier  */
import BedboardSegment from './BedboardSegment';
import type AdvancedBaseTool from './AdvancedBaseTool';
import type { ToolProps } from './AdvancedBaseTool';
interface IToolClassReference<T extends AdvancedBaseTool = AdvancedBaseTool> {
    toolName?: string;
    new (props: any): T;
}
declare const advancedTools: Map<string, IToolClassReference<AdvancedBaseTool>>;
declare let instanceAdvancedTool: any;
declare function addAdvancedTool(ToolClass: IToolClassReference, toolNameAlias?: string): void;
declare function newInstanceAdvancedTool(toolName: string, toolProps?: ToolProps): any;
declare function destroyInstanceAdvancedTool(toRecoverDefaultTool?: boolean): void;
declare const tools: {
    BedboardSegment: typeof BedboardSegment;
};
export { tools, addAdvancedTool, advancedTools, destroyInstanceAdvancedTool, instanceAdvancedTool, IToolClassReference, newInstanceAdvancedTool, };
