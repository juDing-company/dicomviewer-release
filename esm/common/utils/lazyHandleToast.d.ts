import { Func } from './lazyHandle';
interface Options {
    message: string;
    type: 'info' | 'error' | 'warning' | 'success';
    timeout: [number | undefined, number | undefined] | undefined;
    func?: Func;
    params: any[];
}
declare const lazyHandleToast: (FuncName: any, message: Options["message"], type?: Options["type"], timeout?: Options["timeout"], func?: Options["func"], ...params: any[]) => void;
export default lazyHandleToast;
