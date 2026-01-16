export type onEditType = (modality: string, oldModality: string, index: number) => void;
interface InputProps {
    modalityList: string[];
    modality: string;
    index: number;
    onEdit: onEditType;
}
declare const _default: import("react").NamedExoticComponent<InputProps>;
export default _default;
