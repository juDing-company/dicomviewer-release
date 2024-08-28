# DicomViewer

## 版本发布说明

###  V1.0.0

####  新增功能
- 支持2D、3D、MPR基础模块

###  V1.1.0

####  新增功能
- 支持移动端

###  V1.2.0

####  新增功能
- 支持AI

###  V1.3.0

####  新增功能
- 支持标尺
- 新增高性能模式

### 改进
- 序列栏显示优化
- 移动端布局优化
- 提示语优化
- 图像解析优化
- 移动端适配优化
- 性能优化
- MPR优化
- 播放优化

###  V1.4.0

####  新增功能
- 支持PET-CT

#### 调整
- *影像模式名称变更* 压缩模式=>有损模式，标准模式=>无损模式
- *专业模式改为默认隐藏*

###  V1.4.1

####  新增功能
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

###  V1.5

####  新增功能
- MPR 容积功能支持右键调窗、方位标识
- 支持专业模式DSA
- 新增3D探针
- 新增自动、手动联动模式
- 新增调窗快捷按键
— 保存标注
- 新增显示隐藏标注 详见syncLabels配置开启
- 新增关键影像功能 详见syncMarkersImage配置开启



## 部署、接入

![image.](https://s1.ax1x.com/2023/08/08/pPVYEwV.png)

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
    <!-- 启用MPR功能请导入该模块，不启用请勿导入，以免造成资源加载浪费，注：defer可以优化加载避免阻塞 -->
    <script defer src="./dicomviewer-cornerstone/webDicomViewMPR.min.js"></script>
    <!-- 核心基础模块，请结合实际情况放在所有script标签最未处，以免造成不必要的阻塞 -->
    <script src="./dicomviewer-cornerstone/WebDicomView.min.js"></script>
  </body>

        webDicomView = new WebDicomView(
            container as HTMLDivElement|string, /* 例：document.querySelector('#app') or 'app' */
            wadoURL as string, /* 多检查使用“,”拼接；例：1.2.840.1659887560.714,1.2.840.1659887560.333 */
            hospID as string,
            studyUID: string,
            { /* 可选参数 */
                publicPath?:'dicomviewer-cornerstone/', /* 公共目录路径，默认情况无需配置，系统默认推断，注： V1.4.1 开始支持，代替GPUBenchmarksURL */
                GPUBenchmarksURL?:"./dicomviewer-cornerstone/GPUbenchmarks", /* 1.4.1废弃！  GPUBenchmarks路径，默认无需配置,注：系统会自动补全，如提示GPU路径不存在，结合实际调整路径 */
                sharedArrayBuffer?:boolean, /* 开启MPR渲染加速，默认自动检测系统支持*/
                imageTypeDefault?:-1 | 0 | 1, /* -1 png有损模式 0 png无损模式 1 dcm专业模式 ,注：PC 默认专业模式 mobile 默认：无损模式, 用户自主选择后以用户选择为默认 */
                seriesLayoutDefault?:{x:number, y:number}  /* 序列布局，注：配置后，内部默认配置失效  */
                languageDefault?: string, /* 语言，例：'zh-CN' | 'en'，注：默认无需配置!系统自动检测，可按下方文档任意扩展语言包 */
                token?:string,
                departCode?:string,
                isDesensitize?:boolean, /* 是否脱敏，默认false */
                isKeyImage?:boolean, /* 是否关键影像，默认false */
                isInternal?:boolean, /* 获取影像路径内外网，默认外网云存储 */
                clientType?:number, /* 客户端类型，默认值是0 */
                cacheImagesDefault?:boolean, /* 是否启用缓存，默认启用 */
                scrollPreload?:boolean, /* 是否启用滚动加载，默认启用 */
                scrollPreloadNum?:number, /* 滚动预加载数量, 默认9 注：scrollPreload为true 生效*/
                seriesPreFetchNum?:number, /* 各序列初始预加载数量, 默认0,0为自动 */
                fullLoad?:boolean, /* 关闭序列按需加载，开启全部序列下载，默认序列按需加载 */
                minRenderCountMPR3D?:number, /* MPR/3D最小渲染数量 */
                losslessMPR?:boolean, /* MPR无损渲染，默认true,注： V1.4.1开始支持*/
                logoURL?:url | base64 | ' ', /*  注：' '(内有空格)为不显示logo */
                syncLabels?:boolean, /* 保存标注，默认false,注： V1.5开始支持*/
                syncMarkersImage?:boolean, /* 保存关键影像，默认false,注： V1.5开始支持*/
                closePageResetDefault?: { /* 关闭页面恢复默认设置 */
                    imageType?:boolean, /* 影像模式 */
                    cacheImages?:boolean, /* 缓存 */
                    tackSynchronizerType?: boolean, /* 滚动联动模式,注： V1.5 开始支持， */
                },
                AI?:{
                    resultURL: url,/* AI分析结果接口地址，注：parseSuccess设为false时可以不配置*/
                    parseSuccess?:boolean, /* 已获得AI分析结果 默认false，注：设为false或未配置时，点击AI按键会执行=》getParseHandler函数 */
                    active?:boolean, /* AI按钮高亮为选中，显示AI结果 默认false */
                    jumpFirstAI?:boolean, /* 跳转到序列首张AI 默认false */
                    getParseHandler:({ studyArr, departCode, hospID }) => { /* 申请AI分析，执行业务层事件 */
                        /*
                        业务层获得AI分析结果后
                        可执行以下方法打开AI(结合实际情况选择)
                        new WebDicomView(...,{
                            AI:{
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
                theme?:{
                    background?:string, /* 背景色  例：rgb(0,0,0) or 'color' or '#000' */
                    'background-active'?:string, /* 背景选中色  例：rgb(0,0,0) or 'color' or '#000' */
                    'background-hover'?:string, /* 背景hover色  例：rgb(0,0,0) or 'color' or '#000' */
                    color?:string, /* 文字色  例：rgb(0,0,0) or 'color' or '#000' */
                    color2?:string, /* 辅助、其他色  例：rgb(0,0,0) or 'color' or '#000' */
                },
                toolsBar?:{
                    navigationBottomLayout:?:boolean, /* 序列栏底部显示，默认true */
                    seriesBarVisibility?:boolean,/* 序列栏按钮显示隐藏，默认显示 */
                    MPRVisibility?:boolean, /* MPR显示隐藏，默认显示 */
                    MPRFusionVisibility?:boolean /*  MPR融合显示隐藏*，默认显示/,
                    VRTVisibility?:boolean, /* 3D显示隐藏，默认调取接口判断*/
                    AIVisibility?:boolean, /* AI显示隐藏，根据是否配置AI参数自动判断*/
                    enhanceVisibility?:boolean, /* 增强显示隐藏，默认隐藏，不加载opencvopencv模块*/
                    aboutUsVisibility?:boolean, /* 关于我们显示隐藏，默认显示*/
                    fastImageModeVisibility?:boolean /* 废弃改为 fasModeVisibility*/,
                    fasModeVisibility?:boolean /* 有损模式显示隐藏，默认显示，平台不支持压缩则关闭该模式选项 */,
                    staModeVisibility?:boolean /* 无损模式显示隐藏，默认显示 */,
                    majModeVisibility?:boolean /* 专业模式显示隐藏，默认隐藏 ，1.4.0 改为默认隐藏*/,
                    imageModeVisibility?:boolean:/* 模式按钮显示隐藏，默认显示 */,
                    languageVisibility?:boolean /* 语言显示隐藏，默认隐藏 */
                    customMenu?:{ /* 自定义菜单，谨慎配置，详情见下方：customMenu配置  */
                        main?:ToolData[], /* 2D菜单 */
                        MPR?:ToolData[], /* MPR菜单 */
                        VRT?:ToolData[] /* 3D菜单 */
                    }
                },
                aboutUs?:{
                    imgURl?:url | base64 | false, /* 注：默认无需配置!,false为不显示 */
                    description?:string | false, /* 简介; 注：false为不显示 */
                    version?:string | false, /* 版本号，例如1.1.1_20230101; 注：默认无需配置!,false为不显示 */
                    copyright?:string | false, /* 公司名称; 注：false为不显示 */
                    tel?:string | false, /* 电话; 注：false为不显示 */
                },
            }
        )

        /* 追加检查 */
        webDicomView.addStudy('1.2.840.1659887560.714.444')

        /* 显示AI结果 */
        webDicomView.activeAI({
            parseSuccess: true,
            active: true,
            jumpFirstAI: true,
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
      height: calc(100vw - env(safe-area-inset-top) - env(safe-area-inset-bottom));
    }
```

## customMenu 配置

- 默认配置打印(请以此为模板进行修改！！！)：

```
    console.log(webDicomView.getMenuDefault(isI18n?:boolean))<!-- isI18n：是否返回国际化菜单，不传则自动判断 ==> 检测加载了多个语言包&&(设置了默认语言||开启了语言菜单显示)）） -->
```

```

    interface ToolData {
        toolTag: string;/* 禁止修改参数！注：此项为菜单UID */
        toolName: (() => string) | string /* 禁止修改参数！注：未配置国际化时，此项也可以当菜单伪UID(本土语言语意性强) 可以不配置toolTag */
        toolNameAlias?: string; /* 菜单重命名 */
        divider?: boolean /* 分割线 */
        visibility?: (() => boolean) | boolean /* 显示隐藏，注：默认无需配置!!！（要隐藏该菜单请直接屏蔽或删除该条数据）1.内部会根据PC、mobile环境自动判断，如自行配置，则以配置项为准；2. toolsBar配置单独约定的[XXX]Visibility配置，请不要在此处配置!!!此配置只暴力处理显示隐藏，不处理于此相关的功能，例如enhanceVisibility 才会触发依赖模块加载 */
        iconText?: string /* 文本内容代替icon */
        iconImg?: url｜base64 /* img代替icon */
        icon?: (() => string) | string /* 必须是本系统内已有的iconClass */
        children?: ToolData[]
    }
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
const config = await fetch("/webDicomViewConfig.json");
const options = {};

new WebDicomView(document.querySelector("#app"), wadoURL, hospID, studyUID, {
  ...(await config.json()),
  ...options,
});
```

## MPR、PET-CT无法渲染

- 详见：[ doc/*.pdf](./标准版/doc/IntelGPU&BrowserCompatibilitySolutions-zh.pdf)

## build

- 详见：[package.json](./package.json)
