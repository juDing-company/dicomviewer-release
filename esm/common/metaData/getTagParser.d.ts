import type { DataSet } from 'dicom-parser';
declare function getElementsRecursive(dataSet: DataSet): {};
declare function getTagParser(dataSet: DataSet, element: DataSet['elements'][string]): string | {}[];
export { getTagParser, getElementsRecursive };
