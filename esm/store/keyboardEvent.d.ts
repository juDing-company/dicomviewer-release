export interface Keyboard {
    key: string;
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    callback?: (event?: KeyboardEvent) => any;
}
declare const keyboardMap: Map<string | number, Keyboard>;
export declare function add(keyboard: Keyboard): void;
export declare function init(): void;
export declare function destroy(): void;
export default keyboardMap;
