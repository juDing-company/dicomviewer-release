/** @prettier  */
import { FC } from 'react';
import type { InputRef } from 'antd';
import { TextAreaProps } from 'antd/es/input';
interface InputProps extends Omit<TextAreaProps, 'value' | 'onChange'>, React.RefAttributes<InputRef> {
    id?: string;
    value?: string;
    onChange?: (value?: string) => void;
}
declare const Layout: FC<InputProps>;
export default Layout;
