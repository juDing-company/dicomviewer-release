import { FC } from 'react';
import type { TagsConfigItem } from '@hs/store/form/aroundTags';
declare const TagItem: FC<{
    item: TagsConfigItem;
    index: number;
    droppableId: string;
}>;
export default TagItem;
