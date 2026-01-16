import { CustomLayoutMap } from './customLayoutMap';
interface LayoutsMap {
    icon: string;
    layout?: string;
    layoutIndex?: keyof CustomLayoutMap;
    title?: string;
    type?: string;
}
declare const layoutsMap: LayoutsMap[];
export default layoutsMap;
