declare const setToolActive: (toolName: string, options: Object | string[] | number, interactionTypes?: string[]) => void;
declare const setToolEnabled: (toolName: string, options?: Object | number) => void;
declare const setToolPassive: (toolName: string, options?: Object | number) => void;
declare const setToolDisabled: (toolName: string, options?: Object | number) => void;
declare const clearToolsActive: () => void;
export { setToolActive, setToolEnabled, setToolPassive, setToolDisabled, clearToolsActive };
