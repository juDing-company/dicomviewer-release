# DicomViewer

## 部署、接入

![image.](https://s1.ax1x.com/2023/08/08/pPVYEwV.png)

```
  <head>
    <link rel="stylesheet" href="./dicomviewer-cornerstone/webDicomView.min.css">
  </head>
  <body>
    ...
    <script src="./dicomviewer-cornerstone/WebDicomView.min.js"></script>
  </body>

        webDicomView = new WebDicomView(
            container as HTMLDivElement|string, /* 例：document.querySelector('#app') or 'app' */
            wadoURL as string, /* 多检查使用“,”拼接；例：1.2.840.1659887560.714,1.2.840.1659887560.333 */
            hospId as string,
            studyUID: string,
            { /* 可选参数 */
                GPUBenchmarksURL: "./dicomviewer-cornerstone/GPUbenchmarks", /* GPUBenchmarks路径，不配置无法使用GPU */
                imageTypeDefault: -1|0|1, /* -1 png极速模式 0 png标准模式 1 dcm专业模式 默认1 */
                token: string,
                departCode: string,
                isDesensitize: boolean,
                isKeyImage: boolean, /* 是否关键影像，默认false*/
                isInternal: boolean, /* 获取影像路径内外网，默认外网云存储 */
                clientType: number, /* 客户端类型，默认值是0 */
                cacheImagesDefault: boolean, /* 是否启用缓存，默认启用*/
                scrollPreload: boolean, /* 是否启用滚动加载，默认启用 */
                fullLoad: boolean, /*关闭序列按需加载，开启全部序列下载，默认序列按需加载 */
                theme: {
                    background: string, /* 背景色  例：rgb(0,0,0) or 'color' or '#000' */
                    'background-active': string, /* 背景选中色  例：rgb(0,0,0) or 'color' or '#000' */
                    'background-hover': string, /* 背景hover色  例：rgb(0,0,0) or 'color' or '#000' */
                    color: string, /* 文字色  例：rgb(0,0,0) or 'color' or '#000' */
                    color2: string, /* 辅助、其他色  例：rgb(0,0,0) or 'color' or '#000' */
                },
                logoURL: string, /* 例：url or  'data:image/png;base64' or ' '; ' '为不显示logo */
                toolsBar: {
                    MPRVisibility: boolean, /* MPR显示隐藏 */
                    fastImageModeVisibility: boolean /* 极速模式显示隐藏，非云端储存平台无法压缩，则关闭该模式选项 */
                },
                aboutUs: {
                  copyright: '深圳市巨鼎医疗股份有限公司',
                  tel: '400-000',
                },
                prefetchNum: number, /* 预先堆叠加载数量 默认0 未支持*/
                scrollLoadLazyNum: number, /* 滚动预加载数量 默认7，-1则全部下载 未支持*/
            }
        )

        webDicomView.addStudy('1.2.840.1659887560.714.444')/* 追加检查 */

        webDicomView.destroy()

        webDicomView = undefined
```

## build

- 见 :[ package.json](./package.json)
