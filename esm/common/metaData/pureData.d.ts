import type { HttpMeta } from '@/dicom/DicomInterface';
import type { QueryParamsBase } from '@/index.d';
import type { Meta } from './index.d';
import type { Study } from '@/dicom';
export declare const toArrayParseNumber: (value: string) => number[];
declare const pureData: (data: HttpMeta, queryParams: QueryParamsBase, study: Study) => Meta;
export default pureData;
