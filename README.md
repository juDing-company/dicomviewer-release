# DicomViewer

## 版本发布说明

###  V1.0.0

####  新增
- 支持2D、3D、MPR基础模块


###  V1.1.0

####  新增
- 支持移动端


###  V1.2.0

####  新增
- 支持AI


###  V1.3.0

####  新增
- 支持标尺
- 新增高性能模式

#### 改进
- 序列栏显示优化
- 移动端布局优化
- 提示语优化
- 图像解析优化
- 移动端适配优化
- 性能优化
- MPR优化
- 播放优化


###  V1.4.0

####  新增
- 支持PET-CT

#### 调整
- *影像模式名称变更* 压缩模式=>有损模式，标准模式=>无损模式
- *专业模式改为默认隐藏*


###  V1.4.1

####  新增
- 新增PET-CT颜色栏
- 新增MPR无损渲染配置：losslessMPR
- 新增公共目录路径配置：publicPath 代替 GPUBenchmarksURL

####  改进
- PET-CT优化

#### 调整
- *MPR无损渲染默认启用*
- *去除MPR画质工具*
- *GPUBenchmarksURL建议废弃，使用publicPath代替*


###  V1.4.2

####  改进
- PET-CT颜色栏移动端兼容


###  V1.5.0

####  新增
- MPR 容积功能支持右键调窗、方位标识
- 支持专业模式DSA
- 新增3D探针
- 新增自动、手动联动模式
- 新增调窗快捷按键
— 保存标注
- 新增显示隐藏标注 详见syncLabels配置开启(需后端接口配合)
- 新增关键影像功能 详见syncMarkersImage配置开启(需后端接口配合)


###  V1.5.1

####  改进
- 修复专业模式部分US图像异常
- 修复部分CT RGB、报告图像异常


###  V1.5.2

####  新增

-支持有损、无损模式DSA(需后端接口调整)


###  V1.5.3

####  改进
- 修复部分情况下部分3D探针失效
- 修复destroy方法
- 同步器优化
- 线程注册优化


###  V1.5.4

####  改进
- 软件升级后将用户设置（影像模式、联动模式、使用缓存）重置为默认


###  V1.5.5

####  新增
- 互认标识


###  V1.6.0

####  新增
- 支持PC端打印排版,默认隐藏 详见printVisibility配置开启(需后端接口配合)

####  改进
- 锐化、平滑从无极调节改为高中低三级，优化增强渲染速度
- 左、右标记改为每个图像限制为标记一次


###  V1.7.0

####  新增
- 新增MPR调窗、MPR调窗快捷按键

####  调整
- 定位线去除 特定图像数据与特定参考框架相关联的唯一 验证

####  优化
- 内存优化，支持库升级到2.0


###  V1.7.1

####  新增
- 新增DR拼接，默认显示。详见imageStitchingVisibility配置关闭

####  调整
- “当前序列不再序列窗口中，图像未渲染，请拖拽或者双击加载至当前窗口” 提示语去除


###  V1.7.2

####  改进
- 修复有损模式部分MPR显示不完整

####  优化
- 部分鸿蒙系统webGL支持不完整进行兼容

####  调整
- 环境检测机制由导入检测改为初始化检测


###  V1.7.3

####  新增
- 网络环境差提示语
- 添加 minLoadSpeed，minDecodeSpeed, concurrentNetwork, imageStitchingVisibility 配置

####  优化
- 全量下载模式优化

####  调整
- 全量下载模式下，强制将滚动下载（scrollPreload）关闭
- 全量下载模式下，改为只显示当前序列的进度条
- token 可以自定义Bearer前缀


###  V1.7.4

####  改进
- 修复部分png显示黑屏


###  V1.8.0

####  新增
- 自动、手动去床


###  V1.9.0

####  新增
- 自定义四角信息
- metaData源数据保存开关


###  V1.9.1

####  新增
- 菜单自定义


###  V1.10.0

####  新增
- 挂片协议


###  V1.10.1

####  改进
- 修复兼容IM：id、imageInstanceUid不一致问题


###  V1.11.0

####  调整
- 3D调窗
- 容积布局调整

####  优化
- 视图预设: 空气、骨骼
- 低性能设备旋转卡顿

#### 修复
- MPR加载卡顿


###  V1.11.1

####  新增
- 3DLite模式

###  V1.11.2

####  改进
- 修复部分png资源MPR异常


###  V1.12.0

####  新增
- 工具栏：置顶/置底 按钮；PC默认置顶，mobile默认置底
- PC全屏按钮
- mobile切换专业模式：弹窗提示 需更多流量消耗
- mobile 移动按钮：单手

#### 调整
- 工具栏：mobile默认置底
- 序列栏：mobile默认收起
- 按医保新规调整四角信息


###  V1.12.1

####  改进
- 兼容部分不规范tag数据


###  V1.13.0

####  新增
- 一键发送：唤起MIV
- 跨医院检查对比
- 历史检查

#### 调整
- 多检查默认只显示一个，点击历史检查按钮后显示。注：多检查追加不影响


###  V1.13.1

####  新增
- 工具栏、序列栏配置项

#### 调整
- 工具栏：mobile默认置顶
- 序列栏：mobile默认展开

###  V1.13.2

#### 调整
- addStudy方法新增historyStudyVisibility参数，默认true，可选false


###  V1.14.0

####  新增
- 支持分片数据


###  V1.14.1

####  改进
- 兼容部分transferSyntaxUID不规范


###  V1.15.0

####  新增
- 多部位检查合并


## dicomviewer 最低配置要求

### 浏览器要求
— 64位浏览器（推荐chrome、Edge）

### 系统要求
- 64位操作系统（Windows 11以下不推荐使用，微软已停止安全更新）
- PC更新最新驱动
- IOS更新最新系统
- 鸿蒙更新最新系统

### 最低硬件要求
—  CPU: 4核CPU（3D相关功能性能越好速度越快）
—  内存: 8GB（MPR图像越多需要内存越大）
—  硬盘: 60GB（避免空间不足，无法缓存）
-  显卡: 支持OpenGL 2.0及以上（建议独立显卡，部分Intel集显有内存泄露风险）
-  网络: 需要稳定的网络连接

### 环境要求
- 运行环境有空闲的内存、CPU占用率，请退出高消耗程序，及时清理后台程序


## 部署、接入

![image.](https://youke1.picui.cn/s1/2025/09/09/68bfd1ef3846c.png)

```
  <head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <link rel="stylesheet" href="./dicomviewer-cornerstone/webDicomView.min.css">
    <style>
        * {
            margin: 0;
        }

        #app {
          /* 结合实际情况设置所需宽高 */
          height: 100vh;
          width: 100vw;
        }
    </style>
  </head>
  <body>
    ...
    <!-- 可以在locale/目录新增、自定义语言包导入，注：已内置中文语言，再次导入会覆盖内置。 -->
    <script src="./dicomviewer-cornerstone/locale/en.js">
    <!-- V1.7.3已废弃,无需手动导入,改为懒加载！启用MPR功能请导入该模块，不启用请勿导入，以免造成资源加载浪费，注：defer可以优化加载避免阻塞 -->
    <!-- <script defer src="./dicomviewer-cornerstone/webDicomViewMPR.min.js"></script> -->
    <!-- 核心基础模块，请结合实际情况放在所有script标签最未处，以免造成不必要的阻塞 -->
    <script src="./dicomviewer-cornerstone/WebDicomView.min.js"></script>
  </body>

        webDicomView = new WebDicomView(
            container as HTMLDivElement | string, /* 例：document.querySelector('#app') or 'app' */
            wadoURL as string, /* wado api base url */
            hospID as string,
            studyUID: string | StudyQuery[] | string,string,... , /* 1.多检查数组；例：[{hospID:'hosp1',studyUID:'studyUID1',departCode:'depart1'}](注：注：V1.13.0开始支持)； 2.多检查“,”拼接(不推荐)；例：1.2.840.1,1.2.840.2; */
            { /* 可选参数 */
                aroundTagsConfigs?: AroundTagsConfigs, /* 自定义四角信息，谨慎配置，详情见下方：aroundTagsConfigs配置，注：V1.9.0开始支持; V.10.0开始废弃，现已转入hangingSetting配置，仅作为 hangingSetting.aroundTags 未配置default的情况,详见 hangingSetting 配置 */
                bedboardSegmentThreshold?: number, /* 去床阈值，默认15,支持范围1-30 注： V1.8.0开始支持*/
                cacheImagesDefault?: boolean, /* 是否启用缓存，默认启用 */
                clientType?: number, /* 客户端类型，默认值是0 */
                concurrentNetwork?: number, /* 下载并发数，默认6, 注： V1.7.3开始支持 */
                departCode?: string, /* 部门编码，默认空 */
                forceBigEndianToLittleEndianDdecode?: boolean, /* 是否强制大端使用小端解码，默认false；注：V1.14.1开始支持 */
                forceIM?: boolean, /* 是否强制使用IM、IMS、PNG联合解码，默认true */
                fullLoad?: boolean, /* 开启全部序列下载，默认序列按需下载 */
                GPUBenchmarksURL?:  "./dicomviewer-cornerstone/GPUbenchmarks", /* 1.4.1废弃！GPUBenchmarks路径，默认无需配置,注：系统会自动补全，如提示GPU路径不存在，结合实际调整路径 */
                hangingSetting?: HangingSetting, /* 挂片配置，谨慎配置，详情见下方：hangingSetting挂片模块文档指引，注：V1.10.0开始支持 */
                hangingSettingTabBar?: TabBar,/* 挂片菜单显示配置，详情见下方：hangingSetting挂片模块文档指引，注：V1.10.0开始支持 */
                historyStudyVisibility?: boolean, /* 历史检查默认显示配置，默认不显示，注：V1.13.0开始支持 */
                imageTypeDefault?: -1 | 0 | 1, /* -1 png有损模式 0 png无损模式 1 dcm专业模式，注：PC 默认专业模式 mobile 默认：无损模式, 用户自主选择后以用户选择为默认 */
                isDesensitize?: boolean, /* 是否脱敏，默认false */
                isInternal?: boolean, /* 获取影像路径内外网，默认外网云存储 */
                isKeyImage?: boolean, /* 是否关键影像，默认false */
                languageDefault?: string, /* 语言，例：'zh-CN' | 'en'，注：默认无需配置!系统自动检测，可按下方文档任意扩展语言包 */
                logoURL?: url | base64 | ' ', /*  注：' '(内有空格)为不显示logo */
                losslessMPR?: boolean, /* MPR无损渲染，默认true,注：V1.4.1开始支持*/
                minDecodeSpeed?: number; /* 最小解码速度预警，0为关闭，默认2000KB/s。注：V1.7.3开始支持 */
                minLoadSpeed?: number; /* 最小下载速度预警，0为关闭，默认120KB/s。注：V1.7.3开始支持 */
                minRenderCountMPR3D?: number, /* MPR/3D最小渲染数量 */
                navBarMobileVisibility?: boolean, /* 移动端导航栏默认显示配置，默认显示，注：V1.13.1开始支持 */
                publicPath?: 'dicomviewer-cornerstone/', /* 推荐使用window.staticResourceURLPrefix代替！ 公共目录路径，默认情况无需配置，系统默认推断，注： V1.4.1 开始支持，代替GPUBenchmarksURL */
                saveOriginAllMetaData?: boolean, /* 是否保存后端metaData完整源数据，默认false，注：V1.9.0开始支持 */
                scrollPreload?: boolean, /* 是否启用滚动加载，默认启用。 注：V1.7.3以后fullLoad=true scrollPreload关闭 */
                scrollPreloadNum?: number, /* 滚动预加载数量, 默认9 注：scrollPreload为true生效*/
                seriesLayoutDefault?: {x: number, y: number}  /* 序列布局，注：配置后，内部默认配置失效；注：V1.10.0开始废弃，改用挂片配置：hangingSetting*/
                seriesPreFetchNum?: number, /* 各序列初始预加载数量, 默认0,0为自动 */
                sharedArrayBuffer?: boolean, /* 开启MPR渲染加速，默认自动检测系统支持,注： V1.7 开始废弃 **/
                syncLabels?: boolean, /* 保存标注，默认false,注： V1.5开始支持*/
                syncMarkersImage?: boolean, /* 保存关键影像，默认false,注： V1.5开始支持*/
                token?: string,
                aboutUs?: {
                    copyright?: string | false, /* 公司名称; 注：false为不显示 */
                    description?: string | false, /* 简介; 注：false为不显示 */
                    imgURl?: url | base64 | false, /* 注：默认无需配置!,false为不显示 */
                    tel?: string | false, /* 电话; 注：false为不显示 */
                    version?: string | false, /* 版本号，例如1.1.1.20230101; 注：默认无需配置!,false为不显示 */
                },
                AI?: {
                    active?: boolean, /* AI按钮高亮为选中，显示AI结果 默认false */
                    getParseHandler: ({ studyArr, departCode, hospID }) => { /* 申请AI分析，执行业务层事件 */
                    jumpFirstAI?: boolean, /* 跳转到序列首张AI 默认false */
                    parseSuccess?: boolean, /* 已获得AI分析结果 默认false，注：设为false或未配置时，点击AI按键会执行=》getParseHandler函数 */
                    resultURL: url,/* AI分析结果接口地址，注：parseSuccess设为false时可以不配置*/
                        /*
                        业务层获得AI分析结果后
                        可执行以下方法打开AI(结合实际情况选择)
                        new WebDicomView(...,{
                            AI: {
                                ...
                            }
                        })

                        or

                        webDicomView.activeAI({
                            /* 可选参数
                            resultURL,
                            parseSuccess,
                            active,
                            jumpFirstAI,
                            getParseHandler
                            */
                        })
                        */
                    }
                },
                closePageResetDefault?: { /* 关闭页面恢复默认设置 */
                    cacheImages?: boolean, /* 缓存 */
                    imageType?: boolean, /* 影像模式 */
                    tackSynchronizerType?: boolean, /* 滚动联动模式,注： V1.5 开始支持 */
                },
                theme?: {
                    'background-active'?: string, /* 背景选中色  例：rgba(0,0,0,1) or '#000' */
                    'background-hover'?: string, /* 背景hover色  例：rgba(0,0,0,1) or '#000' */
                    background?: string, /* 背景色  例：rgba(0,0,0) or '#000' */
                    color?: string, /* 文字色  例：rgba(0,0,0,1) or '#000' */
                    color2?: string, /* 辅助、其他色  例：rgba(0,0,0,1) or '#000' */
                },
                toolsBar?: {
                    aboutUsVisibility?: boolean, /* 关于我们显示隐藏，默认显示*/
                    AIVisibility?: boolean, /* AI显示隐藏，根据是否配置AI参数自动判断*/
                    enhanceVisibility?: boolean, /* 增强显示隐藏，默认隐藏，不加载opencvopencv模块*/
                    fasModeVisibility?: boolean, /* 有损模式显示隐藏，默认显示，平台不支持压缩则关闭该模式选项 */
                    fastImageModeVisibility?: boolean, /* 废弃改为 fasModeVisibility*/
                    imageModeVisibility?: boolean, /* 模式按钮显示隐藏，默认显示 */
                    imageStitchingVisibility?: boolean, /* DR拼接显示隐藏，默认显示，注： V1.7.3 开始支持 */
                    languageVisibility?: boolean, /* 语言显示隐藏，默认隐藏 */
                    majModeVisibility?: boolean, /* 专业模式显示隐藏，默认隐藏，1.4.0 改为默认隐藏*/
                    MPRFusionVisibility?: boolean, /*  MPR融合显示隐藏*，默认显示/
                    MPRVisibility?: boolean, /* MPR显示隐藏，默认显示 */
                    navigationBottomLayout?: boolean, /* 序列栏底部显示，V1.10.0开始废弃，改为挂片设置 */
                    printVisibility?: boolean, /* 打印胶片显示隐藏，默认隐藏，注： V1.6.0 开始支持 */
                    seriesBarVisibility?: boolean, /* 序列栏按钮显示隐藏，默认显示 */
                    staModeVisibility?: boolean, /* 无损模式显示隐藏，默认显示 */
                    VRTVisibility?: boolean, /* 3D显示隐藏，默认调取接口判断*/
                    customMenu?: { /* 自定义菜单，谨慎配置，详情见下方：customMenu配置  */
                        main?: ToolData[], /* 2D菜单 */
                        MPR?: ToolData[], /* MPR菜单 */
                        VRT?: ToolData[], /* 3D菜单 */
                    }
                },
            }
        )

        /* 追加检查 */
        webDicomView.addStudy('studyUID' | StudyQuery, historyStudyVisibility: true)

        /* 显示AI结果 */
        webDicomView.activeAI({
            active: true,
            jumpFirstAI: true,
            parseSuccess: true,
            getParseHandler: ({ studyArr, departCode, hospID }) => {
                console.log({ studyArr, departCode, hospID })
            }
        })

        /* 使用完后请记得销毁！！！，以免造成内存占用过多影响业务层！！！ */
        webDicomView.destroy()
        webDicomView = undefined
```

## 配置安全区：刘海、导航栏遮盖

    env、constant函数需设置viewport-fit=cover

    safe-area-inset-left：安全区域距离左边边界的距离
    safe-area-inset-right：安全区域距离右边边界的距离
    safe-area-inset-top：安全区域距离顶部边界的距离
    safe-area-inset-bottom ：安全距离底部边界的距离

```

   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">

    .style {
      height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
      height: calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
    }
```

## 参数类型声明

-  多检查StudyQuery类型声明

```
    interface StudyQuery {
      departCode?: string;
      hospID: string;
      studyUID: string;
      studyUIDCopilot?: string[]; /* 需要合并的studyUID数组；注：V1.15.0 开始支持 */
    }
```

## customMenu 配置

- 默认配置打印(请以此为模板进行修改！！！)：

```
    console.log(WebDicomView.getMenuDefault(isI18n?: boolean))<!-- isI18n：是否返回国际化菜单，不传则自动判断 ==> 检测加载了多个语言包&&(设置了默认语言||开启了语言菜单显示)）） -->
```

- 类型声明

```
    interface ToolData {
        children?: ToolData[]
        clickHandle?: () => void; /* 点击事件，即将废弃，建议使用clickHandler */
        clickHandler?: () => void; /* 点击事件 */
        disActive?: boolean; /* 不可选中 */
        divider?: boolean /* 分割线 */
        icon?: (() => string | string[]) | string | string[]; /* iconClass */
        iconImg?: url｜base64 /* svg、img代替icon */
        iconText?: string /* 文本内容代替icon */
        isLonelyGroup?: boolean; /* 独立分组，独立active */
        isToggle?: boolean;  /* 独立开关类型 */
        quickMenuVisibility?: (() => boolean) | boolean; /* 右键菜单显示隐藏 */
        toolName: (() => string) | string /* 禁止修改参数！注：未配置国际化时，此项也可以当菜单伪UID(本土语言语意性强) 可以不配置toolTag */
        toolNameAlias?: string; /* 菜单重命名 */
        toolTag: string;/* 禁止修改参数！注：此项为菜单UID */
        visibility?: (() => boolean) | boolean /* 显示隐藏，注：默认无需配置!!！（要隐藏该菜单请直接屏蔽或删除该条数据）1.内部会根据PC、mobile环境自动判断，如自行配置，则以配置项为准；2. toolsBar配置单独约定的[XXX]Visibility配置，请不要在此处配置!!!此配置只暴力处理显示隐藏，不处理于此相关的功能，例如enhanceVisibility 才会触发依赖模块加载 */
    }
```

- 添加自定义菜单选项

```
const customMenu = (() => {
    const menu = WebDicomView.getMenuDefault(true);

    // 给PC=>2D菜单,添加一个测试菜单
    menu.PC.main.unshift({
      toolName: 'test',
      icon: ['my-icon', 'icon-test'],
      // or
      iconImg: './test.svg',
      clickHandler: () => {
        console.log('test');
      },
      disActive: true,
    });

    return menu.PC;
    // or
    return menu.mobile;
  })()

{
  ···
 toolsBar:{
  ···
  customMenu,
 }
}

```

## ~~aroundTagsConfigs 配置~~

- V.10.0开始废弃，现已转入hangingSetting配置，仅作为 hangingSetting.aroundTags 未配置default的情况,详见 hangingSetting 配置

- 默认配置打印(供参考)：

```
    console.log(WebDicomView.getAroundTagsConfigsDefault())
```

- 如需使用后端metaData原始数据，saveOriginAllMetaData 设置为 true.

- 类型声明

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

type Tag =
  | { studyTag: keyof Study } /* 读取Study，主要用于获取脱敏数据 */
  | { metaDataTag: keyof (Meta & HttpMetaToDicomMeta) } /* 读取http自定义Meta */
  | { dicomTag: string } /* 读取标准DICOM tag */
  | { value: string } /* 自定义值 */
  | { tagRender: TagRender }; /* 自定义渲染 */

type TagsConfigItem = Key &
  Tag & {
    id: string; /* v1.10.0新增，用于标识唯一 */
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

## hangingSetting 挂片配置

- 默认配置打印(供参考)：

```
    console.log(WebDicomView.getHangingSettingDefault())
```

- 类型声明

- 详见挂片模块文档[HangingSetting/README.md](./src/views/HangingSetting/README.md)
- 详见挂片模块文档(镜像)[HangingSetting/README.md](./HangingSettingREADME.md)

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
const config = await (await fetch('/example/config.json')).json();
const config2 = (await import('/example/config.js')).default;
const options = {};

new WebDicomView(document.querySelector("#app"), wadoURL, hospID, studyUID, {
  ...config,
  ...config2,
  ...options,
});
```

## MPR、PET-CT无法渲染

- 详见：[ doc/*.pdf](./doc/IntelGPU&BrowserCompatibilitySolutions-zh.pdf)

## build

- 详见：[package.json](./package.json)

## 取包git地址

- 详见：[http://192.168.18.134:8081/dicomviewer/dicomviewer-release](http://192.168.18.134:8081/dicomviewer/dicomviewer-release)

## 独立站点git地址

- 详见：[http://192.168.18.134:8081/dicomviewer/dicomviewer-site](http://192.168.18.134:8081/dicomviewer/dicomviewer-site)
