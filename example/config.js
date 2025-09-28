/*! Version: 1.10.0.250928 | Build time: 9/28/2025, 4:36:55 PM */
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
    printVisibility: true,
    seriesBarVisibility: true,
  },
  hangingSetting: {
    /*  layout: {
      navMenu: 'BT',
      modalityGrids: [
        {
          modality: 'CTest',
          series: {
            x: 3,
            y: 1,
          },
          image: {
            x: 1,
            y: 1,
          },
        },
        {
          modality: 'defaultTest',
          series: {
            x: 3,
            y: 1,
          },
          image: {
            x: 1,
            y: 1,
          },
        },
      ],
    }, */
    /*  aroundTags: {
      configs: {
        defaultTest: {
          ltMarker: [
            {
              id: 44030001,
              key: 'name',
              studyTag: 'name',
              metaDataTag: 'patientName',
              DICOMTag: 0x00100010,
            },
            {
              id: 44030002,
              key: 'ID',
              studyTag: 'patientID',
              metaDataTag: 'patientID',
            },
            {
              id: 44030003,
              key: 'modality',
              metaDataTag: 'modality',
            },
            {
              id: 44030004,
              key: 'sex',
              metaDataTag: '_patientSex',
            },
            {
              id: 44030005,
              key: 'age',
              metaDataTag: '_patientAge',
            },
          ],
          rtMarker: [
            {
              id: 44030006,
              key: 'date',
              metaDataTag: '_acquisitionDate',
            },
            {
              id: 44030007,
              key: 'imageNumber',
              tagRender: ({ study, meta }) =>
                [study?.studyID || meta.studyID, meta.seriesNumber, meta.instanceNumber].join('-').replace(/-{2,}/, '-'),
            },
          ],
          lbMarker: [
            {
              id: 44030009,
              key: 'HR',
              showKey: false,
              tagRender: ({ metaData, imageId }) => metaData.get('_referringPhysicianModule', imageId),
            },
            {
              id: 44030010,
              key: 'KVP',
              metaDataTag: 'KVP',
            },
            {
              id: 44030011,
              key: 'thickness',
              metaDataTag: 'sliceThickness',
            },
            {
              id: 44030012,
              key: 'descriptionLite',
              metaDataTag: 'seriesDescription',
            },
          ],
          rbMarker: [
            { id: 440300014, key: 'scale', value: ' ' },
            { id: 440300015, key: 'windowCenter', value: ' ' },
            { id: 440300016, key: 'windowWidth', value: ' ' },
            { id: 440300017, key: 'hospitals', showKey: false, studyTag: 'orgname', metaDataTag: 'institutionName' },
          ],
        },
      },
    }, */
    /* other: {
      WWWCMenu: [
        {
          descCN: 'test',
          descEN: 'test',
          WW: 1,
          WC: 1,
          keyboard: {
            key: 'a',
            // altKey: true,
            // ctrlKey: true,
            // metaKey: true,
            // shiftKey: true,
          },
        },
      ],
    }, */
  },
  hangingSettingTabBar: {
    layoutVisibility: true,
    aroundTagsVisibility: true,
    otherVisibility: true,
    quickMenuVisibility: true,
  },
};
