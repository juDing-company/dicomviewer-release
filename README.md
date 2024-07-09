# DicomViewer

## 接入

demo:[/example.html?WadoURL=http://192.168.85.118:8084/api/Wado&Hospid=222&Studyuid=600](./example.html)

* URLParams

```
  /example.html?WadoURL=XXX&Hospid=XXX&Studyuid=XXX
  {
    WadoURL : string,
    Hospid : string,
    Studyuid : string,
    /* 以上为必要参数 */
    imageType : '0'|'1' /* 0 png 1 dcm 默认0 */
    token : string,
    departCode : string,
    isDesens : '0'|'1'
    showProgress : '0'|'1' /* 显示进度条 */
    prefetchNum : number  /* 预先堆叠加载数量 默认0 */
    isKeyImage: '0'|'1'/* 是否关键影像 */
    isInternal : '0'|'1' /* 获取影像路径内外网，默认外网云存储 */
  }
  ```
  * config
  ```
  <body>
    <script>
        window.config = {
            pseudoColorPath: './dicomviewer/css/pseudocolor/', //伪彩图片路径
            threadDecodePath: './dicomviewer/js/min/Thread.Decode.min.js' //线程解码js路径
        }
        ...
    </script>
    </body>
  ```
 * 方法工具库
  ```
    <script src="dicomviewer/js/min/simple.min.js"></script>
    or
    <script src="https://cdn.jsdelivr.net/npm/simple2k13@0.0/dist/simple.min.js"></script>

  ```

 * 部署可删除文件

  ![image](https://files.catbox.moe/95qwh6.png)

* 最新min文件:[http://192.168.18.134:8081/dicomviewer/dicomviewer-release](http://192.168.18.134:8081/dicomviewer/dicomviewer-release)

### 代码解释

#### CBoBo.Program.js

* 	获取参数

  ```
      var studyuid = CBoBo.Plugin.GetUrlParam('Studyuid') || $("#hdstuuid").val();
      var wado = CBoBo.Plugin.GetUrlParam('WadoURL') || $("#hdurl").val();
      var hospid = CBoBo.Plugin.GetUrlParam('Hospid') || $("#hdhospid").val();
      var token = CBoBo.Plugin.GetUrlParam('token') || $("#token").val();
      var imageType = (CBoBo.Plugin.GetUrlParam('imageType') == 1) ? 1 : 0;
      var departCode = CBoBo.Plugin.GetUrlParam('departCode') || $("#departCode").val() || 0;
      var hasDesensitize = CBoBo.Plugin.GetUrlParam('isDesens') || CBoBo.Plugin.GetUrlParam('hasDesensitize') || CBoBo.Plugin.GetUrlParam('hdsensitivity') || $("#hasDesensitize").val() || $('#hdsensitivity').val()
  ```


#### CBoBo.DataManager.js

* worker标准路径：./dicomviewer/js/Thread.Decode.js,以下是为了兼容不规范
  ```
		const workerList = [
    './dicomviewer/js/Thread.Decode.js',
    './static/dicomviewer/js/Thread.Decode.js',
    './js/Thread.Decode.js'
  ]
  ```


## 打包

  * 打包工具   JSCompress.exe

  * 合并文件：合并 JS文件夹中的.js文件，  并按一下顺序排序， 合并后的文件名DicomViewer.js  将DicomViewer.min.js包给后台
  ```
    CBoBo.Program.js
    CBoBo.Plugin.js
    CBOBO.Draw.js
    CBoBo.DicomKernel.js
    CBoBo.3d.js
    CBoBo.Annotation.js
    CBoBo.AnnStatusManager.js
    CBoBo.ClutsJs.js
    CBoBo.DataManager.js
    CBoBo.View.js"
    plugins/model/ai.js
  ```
