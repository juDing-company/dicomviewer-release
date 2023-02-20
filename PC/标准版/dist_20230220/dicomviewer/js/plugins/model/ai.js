$(document).ready(function () {
    CBoBo.isShowAi = false;
    CBoBo.rootDom = document.getElementById("dicomContainer");
    CBoBo.Manager = new CBoBo.Manager(CBoBo.rootDom);
    // fw 通过浏览器判断是竖屏还是手机 以及 滚动条宽度和是否显示序列滚动条 20201113
    var browser = CBoBo.Plugin.GetBrowserInfo();  
    CBoBo.IsMobile=browser.isMobile;
    CBoBo.IsTablet=  browser.isTablet;
    /**
     * 监听Ai的点击事件
     * */ 
    CBoBo.Manager.onObserver('aiClick',function(){
        alert("外部事件调用");
    })
    if (CBoBo.IsTablet) {
        CBoBo.Scrollsize = 28;
    } else {
        CBoBo.Scrollsize = 20;
    } 
});
