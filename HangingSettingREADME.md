# DicomViewer Hanging Setting

## 版本发布说明

### V1.10.0

#### 新增


## 部署、接入

![image.](https://youke1.picui.cn/s1/2025/09/09/68bfd1ef3846c.png)

```
  <head>
    ...
    <link rel="stylesheet" href="./dicomviewer-cornerstone/WebDicomViewHangingSetting.min.css">
  </head>
  <body>
    ...
    <!-- 可以在locale/目录新增、自定义语言包导入，注：已内置中文语言，再次导入会覆盖内置。 -->
    <script src="./dicomviewer-cornerstone/locale/en.js">
    <script src="./dicomviewer-cornerstone/WebDicomViewHangingSetting.min.js"></script>
  </body>

        webDicomViewHangingSetting = new WebDicomViewHangingSetting(
            container as HTMLDivElement|string, /* 例：document.querySelector('#app') or 'app' */
            { /* 可选参数 */
                hangingSetting?: HangingSetting, /* 挂片配置，谨慎配置，详情见下方：hangingSetting配置 */
                onSubmit?: (current: HangingSetting[keyof HangingSetting],hangingSetting: HangingSetting) => void;, /* 提交回调 */
                language?: string, /* 语言，例：'zh-CN' | 'en'，注：默认无需配置!系统自动检测，可按下方文档任意扩展语言包 */
                tabBar?: {
                  layoutVisibility: boolean;  /* 布局 */
                  aroundTagsVisibility: boolean; /* 四角信息 */
                  otherVisibility: boolean; /* 预设窗宽窗位 */
                  quickMenuVisibility: boolean; /* 右键菜单 */
                },
                theme?: {
                    background?: string, /* 背景色  例：rgba(0,0,0,1) or '#000' */
                    'background-active'?: string, /* 背景选中色  例：rgba(0,0,0,1) or '#000' */
                    'background-hover'?: string, /* 背景hover色  例：rgba(0,0,0,1) or '#000' */
                    color?: string, /* 文字色  例：rgba(0,0,0,1) or '#000' */
                    color2?: string, /* 辅助、其他色  例：rgba(0,0,0,1) or '#000' */
                },
                themeAdvanced?: ThemeConfig /* 高级主题,详细配置见：https://ant-design. antgroup.com/docs/react/customize-theme-cn#theme，注：此参数会覆盖theme部分参数，设置空对象则使用ThemeConfig默认值 */
            }
        )

        /* 使用完后请记得销毁！！！，以免造成内存占用过多影响业务层！！！ */
        webDicomViewHangingSetting.destroy()
        webDicomViewHangingSetting = undefined
```


## hangingSetting 配置

- 默认配置打印(供参考)：

```
    console.log(WebDicomViewHangingSetting.getHangingSettingDefault())
```

- 类型声明 HangingSetting

```
    interface WWWCMenuItem {
      descCN: string;
      descEN: string;
      WW: number;
      WC: number;
      keyboard?: Keyboard;
    }

    interface Keyboard {
      key: string;
      altKey?: boolean;
      ctrlKey?: boolean;
      metaKey?: boolean;
      shiftKey?: boolean;
    }

    interface ModalityGrid {
      modality: string;
      series: { x: number; y: number };
      image: { x: number; y: number };
    }

    interface HangingSetting {
      layout?: {
        modalityGrids?: ModalityGrid[],
        navMenu?: 'LT' | 'RT' | 'BT' | 'LB' | 'RB' | 'BB';
        navMenuMobile?: 'LT' | 'BT' | 'LB' | 'BB';
      },
      aroundTags?: {
        configs?: AroundTagsConfigs,
        source?: TagsConfigItem[];
      },
      quickMenu?: {
        selectKeys?: string[];
      },
      other?: {
        WWWCMenu?: WWWCMenuItem[];
      },
    }
```

- 类型声明 AroundTagsConfigs TagsConfigItem

```
type Marker = 'ltMarker' | 'rtMarker' | 'lbMarker' | 'rbMarker';

type TagRender = (params: {
    imageId: string
    meta: Meta;
    metaData: typeof metaData;
    series: Series;
    study: Study;
    viewport: Viewport;
  }) => string;

type Key =
  | { key: string } /* 内置语言字典 */
  | ({ descEN: string } | { descCN: string }); /* 自定义英文/中文 */
  | { showKey: false }; /* 不显示key */

type Tag =
  | { studyTag: keyof Study } /* 读取Study，主要用于获取脱敏数据 */
  | { metaDataTag: keyof (Meta & HttpMetaToDicomMeta) } /* 读取http自定义Meta */
  | { dicomTag: string } /* 读取标准DICOM tag */
  | { value: string } /* 自定义值 */
  | { tagRender: TagRender }; /* 自定义渲染 */

type TagsConfigItem = Key &
  Tag & {
    id: string; /* 用于标识唯一 */
    formatter?: (...args: any[]) => string; /* 格式化函数 */
    showKey?: boolean; /* 是否显示key */
    style?: { [key: string]: string }; /* 自定义样式 */
  };

type AroundTagsConfig = {
  [key in Marker]?: TagsConfigItem[];
};

type AroundTagsConfigs = { /* 会与内置默认配置合并 */
  default?: AroundTagsConfig;
  [key in modality]: AroundTagsConfig | undefined;
};

```


## 国际化

- 导入语言包，可以在locale/目录新增、自定义语言包导入，注：已内置中文语言，再次导入会覆盖内置。

```
    <script src="./dicomviewer-cornerstone/locale/en.js">
    <script src="./dicomviewer-cornerstone/locale/xxx.js">
```
- 获取本系统语言
```
      console.log(WebDicomView.i18n.getLanguage());
```

## 业务建议

- 可以将json文件作为基础配置放置于服务器，或提供接口服务，避免业务耦合

```
const config = await (await fetch('/config.json')).json();
const config2 = (await import('/config.js')).default;
const options = {};

new WebDicomViewHangingSetting(document.querySelector("#app"), {
  ...config,
  ...config2,
  ...options,
});


## build

- 详见：[package.json](./package.json)

## 取包git地址

- 详见：[http://192.168.18.134:8081/dicomviewer/dicomviewer-release](http://192.168.18.134:8081/dicomviewer/dicomviewer-release)

