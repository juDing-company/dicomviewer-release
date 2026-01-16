export { setToolCursor, resetToolCursor, hideToolCursor };
/**
 * Creates an SVG Cursor for the target element
 *
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {MouseCursor} svgCursor - The cursor.
 * @returns {void}
 */
declare function setToolCursor(element: any, svgCursor: any): void;
declare function resetToolCursor(element: any): void;
declare function hideToolCursor(element: any): void;
