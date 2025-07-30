/** @prettier  */

const defaultConfig = {
  ltMarker: [
    {
      key: 'name',
      studyTag: 'name',
      metaDataTag: 'patientName',
      DICOMTag: 0x0010010,
    },
    {
      key: 'ID',
      studyTag: 'patientID',
      metaDataTag: 'patientID',
    },
    {
      key: 'modality',
      metaDataTag: 'modality',
    },
    {
      key: 'sex',
      metaDataTag: '_patientSex',
    },
    {
      key: 'age',
      metaDataTag: '_patientAge',
    },
  ],
  rtMarker: [
    {
      key: 'date',
      metaDataTag: '_acquisitionDate',
    },
    {
      key: 'imageNumber',
      tagRender: ({ study, meta }) =>
        [study?.studyID || meta.studyID, meta.seriesNumber, `<i>${meta.instanceNumber}</i>`].join('-').replace(/-{2,}/, '-'),
    },
    {
      key: 'synchronizer',
      value: '',
      showKey: false,
    },
  ],
  lbMarker: [
    {
      showKey: false,
      tagRender: ({ metaData, imageId }) => metaData.get('_referringPhysicianModule', imageId),
    },
    {
      key: 'KVP',
      metaDataTag: 'KVP',
    },
    {
      key: 'thickness',
      metaDataTag: 'sliceThickness',
    },
    {
      key: 'descriptionLite',
      metaDataTag: 'seriesDescription',
    },
  ],
  rbMarker: [
    {
      key: 'cruxDesc',
      value: '',
      showKey: false,
    },
    {
      key: 'scale',
      value: '',
    },
    {
      key: 'windowCenter',
      value: '',
    },
    {
      key: 'windowWidth',
      value: '',
    },
    {
      key: 'orgname',
      showKey: false,
      studyTag: 'orgname',
      metaDataTag: 'institutionName',
    },
  ],
};
const CT = {
  ltMarker: [
    {
      key: 'ID',
      showKey: false,
      studyTag: 'patientID',
      metaDataTag: 'patientID',
    },
    {
      key: 'name',
      showKey: false,
      studyTag: 'name',
      metaDataTag: 'patientName',
    },
    {
      showKey: false,
      tagRender: ({ meta }) => [meta.patientBirth, meta._patientSex, meta._patientAge].join('/').replace(/\/{2,}/, '/'),
    },
    {
      key: 'date',
      showKey: false,
      metaDataTag: '_acquisitionDate',
    },
    {
      key: 'time',
      showKey: false,
      metaDataTag: '_acquisitionTime',
    },
    {
      key: 'imageNumber',
      showKey: false,
      tagRender: ({ series, meta }) => [`<i>${meta.instanceNumber}</i>`, series.loadIds.length].join('/').replace(/\/{2,}/, '/'),
    },
  ],
  rtMarker: [
    {
      key: 'orgname',
      showKey: false,
      studyTag: 'orgname',
      metaDataTag: 'institutionName',
    },
    {
      showKey: false,
      metaDataTag: 'manufacturer',
    },
    {
      showKey: false,
      metaDataTag: 'svn',
    },
  ],
  lbMarker: [
    {
      key: 'KVP',
      showKey: false,
      metaDataTag: 'KVP',
    },
    {
      key: 'thickness',
      showKey: false,
      metaDataTag: 'sliceThickness',
    },
  ],
  rbMarker: [
    {
      key: 'cruxDesc',
      value: '',
      showKey: false,
    },
    {
      key: 'scale',
      showKey: false,
      value: '',
    },
    {
      key: 'windowCenter',
      showKey: false,
      value: '',
    },
    {
      key: 'windowWidth',
      showKey: false,
      value: '',
    },
  ],
};
const CT2 = {
  ltMarker: [
    {
      key: 'ID',
      showKey: false,
      studyTag: 'patientID',
      metaDataTag: 'patientID',
    },
    {
      key: 'name',
      showKey: false,
      studyTag: 'name',
      metaDataTag: 'patientName',
    },
    {
      showKey: false,
      tagRender: ({ meta }) => [meta.patientBirth, meta._patientSex, meta._patientAge].join('/').replace(/\/{2,}/, '/'),
    },
    {
      showKey: false,
      metaDataTag: 'studyID',
    },
    {
      key: 'date',
      showKey: false,
      metaDataTag: '_acquisitionDate',
    },
    {
      key: 'time',
      showKey: false,
      metaDataTag: '_acquisitionTime',
    },
    {
      key: 'descriptionLite',
      showKey: false,
      metaDataTag: 'seriesDescription',
    },
    {
      key: 'imageNumber',
      showKey: false,
      tagRender: ({ series, meta }) => [`<i>${meta.instanceNumber}</i>`, series.loadIds.length].join('/').replace(/\/{2,}/, '/'),
    },
  ],
  rtMarker: [
    {
      key: 'orgname',
      showKey: false,
      studyTag: 'orgname',
      metaDataTag: 'institutionName',
    },
    {
      showKey: false,
      metaDataTag: 'manufacturer',
    },
    {
      showKey: false,
      metaDataTag: 'svn',
    },
  ],
  lbMarker: [
    {
      key: 'KVP',
      showKey: false,
      metaDataTag: 'KVP',
    },
    {
      key: 'thickness',
      showKey: false,
      metaDataTag: 'sliceThickness',
    },
  ],
  rbMarker: [
    {
      key: 'cruxDesc',
      value: '',
      showKey: false,
    },
    {
      key: 'scale',
      showKey: false,
      value: '',
    },
    {
      key: 'windowCenter',
      showKey: false,
      value: '',
    },
    {
      key: 'windowWidth',
      showKey: false,
      value: '',
    },
  ],
};
const DX = {
  ltMarker: [
    {
      key: 'ID',
      showKey: false,
      studyTag: 'patientID',
      metaDataTag: 'patientID',
    },
    {
      key: 'name',
      showKey: false,
      studyTag: 'name',
      metaDataTag: 'patientName',
    },
    {
      showKey: false,
      tagRender: ({ meta }) => [meta.patientBirth, meta._patientSex, meta._patientAge].join('/').replace(/\/{2,}/, '/'),
    },
    {
      key: 'date',
      showKey: false,
      metaDataTag: '_acquisitionDate',
    },
    {
      key: 'time',
      showKey: false,
      metaDataTag: '_acquisitionTime',
    },
    {
      key: 'imageNumber',
      showKey: false,
      tagRender: ({ series, meta }) => [`<i>${meta.instanceNumber}</i>`, series.loadIds.length].join('/').replace(/\/{2,}/, '/'),
    },
  ],
  rtMarker: [
    {
      key: 'orgname',
      showKey: false,
      studyTag: 'orgname',
      metaDataTag: 'institutionName',
    },
    {
      showKey: false,
      metaDataTag: 'manufacturer',
    },
    {
      showKey: false,
      metaDataTag: 'svn',
    },
  ],
  lbMarker: [
    {
      key: 'KVP',
      showKey: false,
      metaDataTag: 'KVP',
    },
  ],
  rbMarker: [
    {
      key: 'cruxDesc',
      value: '',
      showKey: false,
    },
    {
      key: 'scale',
      showKey: false,
      value: '',
    },
    {
      key: 'windowCenter',
      showKey: false,
      value: '',
    },
    {
      key: 'windowWidth',
      showKey: false,
      value: '',
    },
  ],
};
const DX2 = {
  ltMarker: [
    {
      key: 'ID',
      showKey: false,
      studyTag: 'patientID',
      metaDataTag: 'patientID',
    },
    {
      key: 'name',
      showKey: false,
      studyTag: 'name',
      metaDataTag: 'patientName',
    },
    {
      showKey: false,
      tagRender: ({ meta }) => [meta.patientBirth, meta._patientSex, meta._patientAge].join('/').replace(/\/{2,}/, '/'),
    },
    {
      showKey: false,
      metaDataTag: 'studyID',
    },
    {
      key: 'date',
      showKey: false,
      metaDataTag: '_acquisitionDate',
    },
    {
      key: 'time',
      showKey: false,
      metaDataTag: '_acquisitionTime',
    },
    {
      key: 'descriptionLite',
      showKey: false,
      metaDataTag: 'seriesDescription',
    },
    {
      key: 'imageNumber',
      showKey: false,
      tagRender: ({ series, meta }) => [`<i>${meta.instanceNumber}</i>`, series.loadIds.length].join('/').replace(/\/{2,}/, '/'),
    },
  ],
  rtMarker: [
    {
      key: 'orgname',
      showKey: false,
      studyTag: 'orgname',
      metaDataTag: 'institutionName',
    },
    {
      showKey: false,
      metaDataTag: 'manufacturer',
    },
    {
      showKey: false,
      metaDataTag: 'svn',
    },
  ],
  lbMarker: [
    {
      key: 'KVP',
      showKey: false,
      metaDataTag: 'KVP',
    },
  ],
  rbMarker: [
    {
      key: 'cruxDesc',
      value: '',
      showKey: false,
    },
    {
      key: 'scale',
      showKey: false,
      value: '',
    },
    {
      key: 'windowCenter',
      showKey: false,
      value: '',
    },
    {
      key: 'windowWidth',
      showKey: false,
      value: '',
    },
  ],
};
const MR = {
  ltMarker: [
    {
      key: 'ID',
      showKey: false,
      studyTag: 'patientID',
      metaDataTag: 'patientID',
    },
    {
      key: 'name',
      showKey: false,
      studyTag: 'name',
      metaDataTag: 'patientName',
    },
    {
      showKey: false,
      tagRender: ({ meta }) => [meta.patientBirth, meta._patientSex, meta._patientAge].join('/').replace(/\/{2,}/, '/'),
    },
    {
      key: 'date',
      showKey: false,
      metaDataTag: '_acquisitionDate',
    },
    {
      key: 'time',
      showKey: false,
      metaDataTag: '_acquisitionTime',
    },
    {
      key: 'imageNumber',
      showKey: false,
      tagRender: ({ series, meta }) => [`<i>${meta.instanceNumber}</i>`, series.loadIds.length].join('/').replace(/\/{2,}/, '/'),
    },
  ],
  rtMarker: [
    {
      key: 'orgname',
      showKey: false,
      studyTag: 'orgname',
      metaDataTag: 'institutionName',
    },
    {
      showKey: false,
      metaDataTag: 'manufacturer',
    },
    {
      showKey: false,
      metaDataTag: 'svn',
    },
  ],
  lbMarker: [],
  rbMarker: [
    {
      key: 'cruxDesc',
      value: '',
      showKey: false,
    },
    {
      key: 'scale',
      showKey: false,
      value: '',
    },
    {
      key: 'windowCenter',
      showKey: false,
      value: '',
    },
    {
      key: 'windowWidth',
      showKey: false,
      value: '',
    },
  ],
};
const MR2 = {
  ltMarker: [
    {
      key: 'ID',
      showKey: false,
      studyTag: 'patientID',
      metaDataTag: 'patientID',
    },
    {
      key: 'name',
      showKey: false,
      studyTag: 'name',
      metaDataTag: 'patientName',
    },
    {
      showKey: false,
      tagRender: ({ meta }) => [meta.patientBirth, meta._patientSex, meta._patientAge].join('/').replace(/\/{2,}/, '/'),
    },
    {
      showKey: false,
      metaDataTag: 'studyID',
    },
    {
      key: 'date',
      showKey: false,
      metaDataTag: '_acquisitionDate',
    },
    {
      key: 'time',
      showKey: false,
      metaDataTag: '_acquisitionTime',
    },
    {
      key: 'descriptionLite',
      showKey: false,
      metaDataTag: 'seriesDescription',
    },
    {
      key: 'imageNumber',
      showKey: false,
      tagRender: ({ series, meta }) => [`<i>${meta.instanceNumber}</i>`, series.loadIds.length].join('/').replace(/\/{2,}/, '/'),
    },
  ],
  rtMarker: [
    {
      key: 'orgname',
      showKey: false,
      studyTag: 'orgname',
      metaDataTag: 'institutionName',
    },
    {
      showKey: false,
      metaDataTag: 'manufacturer',
    },
    {
      showKey: false,
      metaDataTag: 'svn',
    },
  ],
  lbMarker: [],
  rbMarker: [
    {
      key: 'cruxDesc',
      value: '',
      showKey: false,
    },
    {
      key: 'scale',
      showKey: false,
      value: '',
    },
    {
      key: 'windowCenter',
      showKey: false,
      value: '',
    },
    {
      key: 'windowWidth',
      showKey: false,
      value: '',
    },
  ],
};
const hr = aroundTagsConfig => {
  return {
    ...aroundTagsConfig,
    rtMarker: [
      ...aroundTagsConfig.rtMarker,
      {
        showKey: false,
        value: 'CYHR',
      },
    ],
  };
};

export default {
  aboutUs: {
    description: '版权所有，未经授权的复制或传播本内容将受到民事和刑事处罚。',
  },
  imageTypeDefault: 0,
  isDesensitize: true,
  losslessMPR: true,
  syncLabels: true,
  syncMarkersImage: true,
  minLoadSpeed: 120,
  minDecodeSpeed: 2000,
  concurrentNetwork: 1,
  toolsBar: {
    enhanceVisibility: true,
    languageVisibility: true,
    majModeVisibility: true,
    navigationBottomLayout: true,
    printVisibility: true,
    seriesBarVisibility: true,
  },
  aroundTagsConfigs: {
    default: defaultConfig,
    CT: hr(CT),
    MR: hr(MR),
    DX: hr(DX),
    DR: hr(DX),
    MG: DX,
    RF: DX,
  },
};
