/** @prettier  */
import type { ToolDataFlat } from '@hs/store/form/quickMenu';
import type { ToolData } from '@/store/toolDataOrigin';
declare const getToolName: ({ toolNameAlias, toolName, iconText }: ToolData | ToolDataFlat) => string;
export default getToolName;
