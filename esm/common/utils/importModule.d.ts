declare const modules: {
    MPR: () => Promise<typeof import("@/views/MPR")>;
    Stitching: () => Promise<typeof import("@/views/Stitching")>;
    Print: () => Promise<typeof import("@/views/Print")>;
    HangingSetting: () => Promise<typeof import("@hs/index")>;
};
type Modules = typeof modules;
type ModuleName = keyof Modules;
type Module<T extends ModuleName> = Awaited<ReturnType<Modules[T]>>;
declare function importModule<T extends ModuleName>(name: T, animation?: boolean): Promise<Module<T>['default']>;
export default importModule;
