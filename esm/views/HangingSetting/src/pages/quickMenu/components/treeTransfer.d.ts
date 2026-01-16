/** @prettier  */
import { Key } from 'react';
import type { ToolDataFlat } from '@hs/store/form/quickMenu';
import type { TransferProps } from 'antd/es/transfer';
export interface TreeTransferProps extends Omit<TransferProps<ToolDataFlat>, 'value' | 'onChange'> {
    value?: Key[];
    onChange?: (targetKeys: Key[]) => void;
}
declare const _default: import("react").NamedExoticComponent<TreeTransferProps>;
export default _default;
