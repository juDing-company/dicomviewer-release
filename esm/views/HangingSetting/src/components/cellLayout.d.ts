/** @prettier  */
import { FC } from 'react';
interface Count {
    x: number;
    y: number;
}
interface InputProps {
    id?: string;
    value?: Count;
    onChange?: (value: Count) => void;
}
declare const Layout: FC<InputProps>;
export default Layout;
