import { Coord } from '../index.d';
/**
 * Retrieve the bounds of the circle in image coordinates
 *
 * @param {*} startHandle
 * @param {*} endHandle
 * @returns {{ left: number, top: number, width: number, height: number }}
 */
export default function getCircleCoords(startHandle: Coord, endHandle: Coord): {
    left: number;
    top: number;
    width: number;
    height: number;
};
