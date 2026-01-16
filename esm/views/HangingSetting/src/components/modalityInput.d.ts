/** @prettier  */
import { FC } from 'react';
import type { InputProps as AntdInputProps, InputRef } from 'antd';
interface InputProps extends Omit<AntdInputProps, 'value' | 'onChange'>, React.RefAttributes<InputRef> {
    id?: string;
    value?: string;
    onChange?: (value?: string) => void;
}
declare const Layout: FC<InputProps>;
export default Layout;
