import type IconPlayer from './iconPlayer';
import type { Study } from '@/dicom';
declare class StudyMenuLayout {
    iconPlayer: IconPlayer;
    container: HTMLElement;
    infoBarContainer?: HTMLElement;
    menuContainer?: HTMLElement;
    constructor(iconPlayer: IconPlayer, container: HTMLElement);
    createLayout(study: Study, studyIndex: number): void;
    createOrEditInfoBar(study: Study, isFirst: boolean): void;
    createMenuBtn(): void;
    activeFirst(): void;
    addItemMenu(study: Study, isFirst: boolean): void;
    toggleMenuVisibility(visibility?: boolean): void;
}
export default StudyMenuLayout;
