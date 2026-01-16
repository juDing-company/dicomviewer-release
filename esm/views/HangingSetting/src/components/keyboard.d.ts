/** @prettier  */
import { FC } from 'react';
import type { Keyboard } from '@/store/keyboardEvent';
interface InputProps {
    id?: string;
    value?: Keyboard;
    onChange?: (value?: Keyboard) => void;
}
declare const Layout: FC<InputProps>;
export default Layout;
