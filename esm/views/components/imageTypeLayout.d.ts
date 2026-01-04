import { ImageType } from '@/store/app';
export interface ImageTypeEventsData extends DataItem {
    btnTarget?: HTMLElement;
    custom?: boolean;
}
interface DataItem {
    title: string;
    icon: string;
    type: ImageType;
    visibility?: Function;
}
declare class ImageTypeLayout {
    data: DataItem[];
    constructor();
    createLayout(event: any): void;
    handleLayout(event: ImageTypeEventsData): void;
}
export default ImageTypeLayout;
