import { IColorMapPreset } from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction/ColorMaps';
import { ColorbarCommonProps } from '.';
type WidgetProps = {
    id: string;
    container?: HTMLElement;
};
export type ColorbarProps = (WidgetProps & ColorbarCommonProps) & {
    colormaps: IColorMapPreset[];
    activeColormapName?: string;
};
export {};
