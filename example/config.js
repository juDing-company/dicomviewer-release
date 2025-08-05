/** @prettier  */
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
    default: {
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
            [study?.studyID || meta.studyID, meta.seriesNumber, meta.instanceNumber].join('-').replace(/-{2,}/, '-'),
        },
        {
          key: 'synchronizer',
          value: '',
          showKey: false,
        },
      ],
      lbMarker: [
        {
          key: '',
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
    },
  },
};
