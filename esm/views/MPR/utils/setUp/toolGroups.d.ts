import { IToolGroup, ToolConfiguration, type SetToolBindingsType } from '@cornerstonejs/tools/dist/esm/types';
export declare function setUp2DToolGroups(): void;
export declare function setUp3DToolGroup(): void;
export declare function disable3DToolGroup(): void;
export declare function createToolGroup(toolGroupId: string): IToolGroup;
export declare function setUpToolGroup(toolGroupId: string, viewportIds: string[], optionsArr?: {
    toolName?: string;
    toolClass?: any;
    toolConfiguration?: ToolConfiguration;
    toolBindingsOptions?: SetToolBindingsType;
    disOtherActive?: boolean;
}[]): IToolGroup;
export declare function setToolGroupActive(_toolGroup: string | IToolGroup, toolName?: string, toolBindingsOptions?: SetToolBindingsType, disOtherActive?: boolean): void;
export declare function disPrimaryTool(toolGroup: IToolGroup): void;
