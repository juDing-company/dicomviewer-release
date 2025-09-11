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
                antgroup.com/docs/react/customize-theme-cn#theme，注：此参数会覆盖theme部分参数，设置空对象则使用ThemeConfig默认值 */
                hangingSetting?:HangingSetting, /* 挂片配置，谨慎配置，详情见下方：hangingSetting配置 */
                tabBar?:{
                  layoutVisibility: boolean;  /* 布局 */
                  aroundTagsVisibility: boolean; /* 四角信息 */
                  otherVisibility: boolean; /* 其他 */
                  quickMenuVisibility: boolean; /* 快速操作菜单 */
                },
                language?: string, /* 语言，例：'zh-CN' | 'en'，注：默认无需配置!系统自动检测，可按下方文档任意扩展语言包 */
                theme?:{
                    background?:string, /* 背景色  例：rgba(0,0,0,1) or '#000' */
                    'background-active'?:string, /* 背景选中色  例：rgba(0,0,0,1) or '#000' */
                    'background-hover'?:string, /* 背景hover色  例：rgba(0,0,0,1) or '#000' */
                    color?:string, /* 文字色  例：rgba(0,0,0,1) or '#000' */
                    color2?:string, /* 辅助、其他色  例：rgba(0,0,0,1) or '#000' */
                },
                themeAdvanced?:ThemeConfig /* 高级主题,详细配置见：https://ant-design.
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

- 类型声明

```
    interface HangingSetting {
      layout?:{
        modalityGrids?: {
          modality: string;
          series: { x: number; y: number };
          image: { x: number; y: number };
        }[],
        navMenu: 'LT' | 'RT' | 'BT';
        navMenuMobile: 'LT' | 'BT';
      }
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
const config = await fetch("/webDicomViewHangingSettingConfig.json");
const options = {};

new WebDicomViewHangingSetting(document.querySelector("#app"), {
  ...(await config.json()),
  ...options,
});
```


## build

- 详见：[package.json](./package.json)

## 取包git地址

- 详见：[http://192.168.18.134:8081/dicomviewer/dicomviewer-release](http://192.168.18.134:8081/dicomviewer/dicomviewer-release)

## 独立站点git地址

- 详见：[http://192.168.18.134:8081/dicomviewer/dicomviewer-site](http://192.168.18.134:8081/dicomviewer/dicomviewer-site)
