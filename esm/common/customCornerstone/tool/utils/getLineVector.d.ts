/**
 * Return the Vector of a line which determines its inclination and length
 *
 * @param {number} columnPixelSpacing Width that a pixel represents in mm
 * @param {number} rowPixelSpacing Height that a pixel represents in mm
 * @param {*} startPoint Start point of the line
 * @param {*} endPoint End point of the line
 *
 * @returns {*} Resulting line inclination vector
 */
export default function getLineVector(columnPixelSpacing: any, rowPixelSpacing: any, startPoint: any, endPoint: any): {
    x: number;
    y: number;
    length: number;
};
