/** @prettier  */
import { FC, Ref } from 'react';
import type { TagsConfigItem } from '@hs/store/form/aroundTags';
export interface Imperative {
    open: () => void;
    close: () => void;
}
declare const Layout: FC<{
    data: TagsConfigItem;
    ref: Ref<Imperative>;
}>;
export default Layout;
