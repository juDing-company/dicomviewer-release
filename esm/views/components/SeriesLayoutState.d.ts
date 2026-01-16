import Series from "@/dicom/Series";
export interface State {
    studyUID?: string;
    seriesUID?: string;
    scrollIndex?: number;
    synchronizerStatus?: boolean;
    series?: Series;
}
declare class SeriesLayoutState {
    private states;
    private originStates;
    constructor(seriesArr: Series[]);
    addSeriesArr(seriesArr: Series[]): void;
    getStates(): State[];
    getStatesLength(): number;
    getSeries(statesType?: 'states' | 'originStates'): Series[];
    getSeriesActiveIndex(seriesUID: string): any;
    removeSerie(index: number): void;
    syncState(statesType?: 'states' | 'originStates'): void;
    getOriginState(): State[];
    setState(index: number, state: Partial<State>): void;
    setSynchronizerStatus(index: number, status: boolean): void;
    getSynchronizerStatus(index: number): boolean;
    setScrollIndex(index: number, scrollIndex: number): void;
}
export default SeriesLayoutState;
