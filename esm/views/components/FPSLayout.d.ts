interface Callback {
    (params: any): void;
}
interface FPSType {
    title: string;
    val: number;
}
declare class FPSLayout {
    data: Array<FPSType>;
    constructor(event: Event, callback: Callback);
}
export default FPSLayout;
