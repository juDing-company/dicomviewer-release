/** @prettier  */
declare function cleanupEnvironment(options?: {
    removeMetadataProvider?: boolean;
    unregisterImageLoaders?: boolean;
    cleanupDOMElements?: boolean;
}): void;
export default cleanupEnvironment;
