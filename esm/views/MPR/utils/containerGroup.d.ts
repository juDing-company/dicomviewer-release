declare function createContainerGroup(): HTMLElement;
declare function viewportGridBindDoubleClick(): void;
declare function swapViewportGrid(currentLeftIndex: number, currentTargetIndex: number, viewportGridMap?: {
    id: string;
    visibility?: (() => boolean) | boolean;
}[]): void;
declare function updateContainerGroup(): void;
export { createContainerGroup, viewportGridBindDoubleClick, swapViewportGrid, updateContainerGroup };
