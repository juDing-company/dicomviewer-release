/** @prettier  */
import { GridStackPosition } from 'gridstack';
export interface CustomLayoutMap {
    [key: string]: CustomLayout;
}
export interface CustomLayout {
    column: number;
    row: number;
    children: GridStackPosition[];
}
declare const customLayoutMap: CustomLayoutMap;
export default customLayoutMap;
