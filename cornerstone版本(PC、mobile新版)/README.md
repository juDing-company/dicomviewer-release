# DicomViewer

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
    <!-- 启用MPR功能请导入该模块，不启用请勿导入，以免造成资源加载浪费，注：defer可以优化加载避免阻塞 -->
    <script defer src="./dicomviewer-cornerstone/webDicomViewMPR.min.js"></script>
    <!-- 核心基础模块，请结合实际情况放在所有script标签最未处，以免造成不必要的阻塞 -->
    <script src="./dicomviewer-cornerstone/WebDicomView.min.js"></script>
  </body>

        webDicomView = new WebDicomView(
            container as HTMLDivElement|string, /* 例：document.querySelector('#app') or 'app' */
            wadoURL as string, /* 多检查使用“,”拼接；例：1.2.840.1659887560.714,1.2.840.1659887560.333 */
            hospId as string,
            studyUID: string,
            { /* 可选参数 */
                GPUBenchmarksURL?:"./dicomviewer-cornerstone/GPUbenchmarks", /* GPUBenchmarks路径，不配置无法使用GPU加速 */
                sharedArrayBuffer?:boolean, /* 是否开启MPR渲染加速，默认true,注：检测到系统支持则默认开启，该配置将不生效；配置开启后不支持的有相应方案提示*/
                imageTypeDefault?:-1 | 0 | 1, /* -1 png极速模式 0 png标准模式 1 dcm专业模式 ,注：PC 默认专业模式 mobile 默认标准模式  */
                token?:string,
                departCode?:string,
                isDesensitize?:boolean,
                isKeyImage?:boolean, /* 是否关键影像，默认false*/
                isInternal?:boolean, /* 获取影像路径内外网，默认外网云存储 */
                clientType?:number, /* 客户端类型，默认值是0 */
                cacheImagesDefault?:boolean, /* 是否启用缓存，默认启用 */
                scrollPreload?:boolean, /* 是否启用滚动加载，默认启用 */
                fullLoad?:boolean, /* 关闭序列按需加载，开启全部序列下载，默认序列按需加载 */
                minRenderCountMPR3D:boolean, /* MPR/3D最小渲染数量 */
                logoURL?:string, /* 例：url or  'data:image/png;base64' or ' '; ' '为不显示logo */
                AI?:{
                    resultURL: URL,/* AI分析结果接口地址，注：parseSuccess设为false时可以不配置*/
                    parseSuccess?:boolean, /* 已获得AI分析结果 默认false，注：设为false或未配置时，点击AI按键会执行=》getParseHandler函数 */
                    active?:boolean, /* AI按钮高亮为选中，显示AI结果 默认false */
                    jumpFirstAI?:boolean, /* 跳转到序列首张AI 默认false */
                    getParseHandler:({ studyArr, departCode, hospId }) => { /* 申请AI分析，执行业务层事件 */
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
                    MPRVisibility?:boolean, /* MPR显示隐藏，默认显示 */
                    VRTVisibility?:boolean, /* 3D显示隐藏，默认显示*/
                    AIVisibility?: boolean, /* AI显示隐藏，默认显示*/
                    enhanceVisibility?:boolean, /* 增强显示隐藏，默认隐藏不加载opencv*/
                    fastImageModeVisibility?:boolean /* 极速模式显示隐藏，默认显示非云端储存平台无法压缩，则关闭该模式选项 */
                },
                aboutUs?:{
                    version?:string, /* 版本号，例如1.1.1_20230101 注：默认无需配置*/
                    copyright?:string, /* 公司名称 */
                    description?:string, /* 简介 */
                    tel?:string, /* 电话 */
                },
                prefetchNum?:number, /* 预先堆叠加载数量 默认0 未支持*/
                scrollLoadLazyNum?:number, /* 滚动预加载数量 默认7，-1则全部下载 未支持*/
            }
        )

        /* 追加检查 */
        webDicomView.addStudy('1.2.840.1659887560.714.444')

        /* 显示AI结果 */
        webDicomView.activeAI({
            parseSuccess: true,
            active: true,
            jumpFirstAI: true,
            getParseHandler: ({ studyArr, departCode, hospId }) => {
                console.log({ studyArr, departCode, hospId })
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

## build

- 见 :[ package.json](./package.json)
