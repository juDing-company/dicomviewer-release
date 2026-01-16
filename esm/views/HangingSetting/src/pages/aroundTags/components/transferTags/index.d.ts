import type { AroundTagsConfig, TagsConfigItem } from '@hs/store/form/aroundTags';
export interface InputProps {
    id?: string;
    value?: AroundTagsConfig;
    onChange?: (value?: AroundTagsConfig) => void;
    fill?: boolean;
}
export declare const Context: import("react").Context<{
    updateTag: (data: TagsConfigItem) => void;
}>;
declare const _default: import("react").NamedExoticComponent<InputProps>;
export default _default;
