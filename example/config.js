/*! Version: 1.11.2.260116 | Build time: 2026/1/16 15:40:06 */
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
    /* aroundTags: {
      configs: {
        defaultTest: {
          ltMarker: [
            {
              id: '44030001',
              key: 'name',
              descCN: '姓名',
              studyTag: 'name',
              metaDataTag: 'patientName',
              dicomTag: '00100010',
            },
            {
              id: '44030002',
              key: 'ID',
              studyTag: 'patientID',
              metaDataTag: 'patientID',
              dicomTag: '00100020',
            },
            {
              id: '44030003',
              key: 'modality',
              descCN: '设备',
              metaDataTag: 'modality',
              dicomTag: '00080060',
            },
            {
              id: '44030004',
              key: 'sex',
              descCN: '性别',
              metaDataTag: '_patientSex',
              dicomTag: '00100040',
            },
            {
              id: '44030005',
              key: 'age',
              descCN: '年龄',
              metaDataTag: '_patientAge',
              dicomTag: '00101010',
            },
          ],
          rtMarker: [
            {
              id: '44030006',
              key: 'date',
              descCN: '日期',
              metaDataTag: '_acquisitionDate',
              dicomTag: '00080022',
            },
            {
              id: '44030007',
              key: 'imageNumber',
              tagRender: ({ study, meta }) =>
                [study?.studyID || meta.studyID, meta.seriesNumber, meta.instanceNumber].join('-').replace(/-{2,}/, '-'),
            },
          ],
          lbMarker: [
            {
              id: '44030009',
              key: 'HR',
              showKey: false,
              tagRender: ({ metaData, imageId }) => metaData.get('_referringPhysicianModule', imageId).referringPhysicianName,
            },
            {
              id: '44030010',
              key: 'KVP',
              descCN: '电压',
              metaDataTag: 'KVP',
              dicomTag: '00180060',
            },
            {
              id: '44030011',
              key: 'thickness',
              descCN: '层厚',
              metaDataTag: 'sliceThickness',
              dicomTag: '00180050',
            },
            {
              id: '44030012',
              key: 'descriptionLite',
              descCN: '描述',
              metaDataTag: 'seriesDescription',
              dicomTag: '0008103E',
            },
          ],
          rbMarker: [
            {
              id: '440300014',
              key: 'scale',
              descCN: '缩放',
              tagRender: ({ viewport }) => viewport?.scale || '',
            },
            {
              id: '440300015',
              key: 'windowCenter',
              descCN: '窗位',
              dicomTag: '00281050',
              tagRender: ({ viewport }) => viewport.voi?.windowCenter || '',
            },
            {
              id: '440300016',
              key: 'windowWidth',
              descCN: '窗宽',
              dicomTag: '00281051',
              tagRender: ({ viewport }) => viewport.voi?.windowWidth || '',
            },
            {
              id: '440300017',
              key: 'hospitals',
              descCN: '医院',
              showKey: false,
              studyTag: 'orgname',
              metaDataTag: 'institutionName',
              dicomTag: '00080080',
            },
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
