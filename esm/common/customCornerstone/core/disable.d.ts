declare const disable: (element: HTMLElement) => void;
declare const disableAll: (globalAll: boolean) => Promise<void>;
export { disableAll, disable };
export default disable;
