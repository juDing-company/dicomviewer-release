export type configElement = {
    attr?: Record<string, any>;
    class?: string;
    container?: HTMLElement;
    defaultValue?: number;
    event?: Record<string, any>;
    html?: string;
    id?: string;
    merge?: object;
    onSelectedValueChange?: (value: any) => void;
    style?: Record<string, any>;
    tag?: string;
};
export default function createElement(config: configElement): HTMLElement;
