import type { AroundTagsConfigs } from '@hs/store/form/aroundTags';
import type { FormInstance } from 'antd';
interface InputProps {
    form: FormInstance;
    aroundTagsConfigs: AroundTagsConfigs;
    updateAroundTagsConfigs: (callback: (aroundTagsConfigs: AroundTagsConfigs) => AroundTagsConfigs | void) => void;
    id?: string;
    value?: string;
    onChange?: (value?: string) => void;
}
declare const _default: import("react").NamedExoticComponent<InputProps>;
export default _default;
