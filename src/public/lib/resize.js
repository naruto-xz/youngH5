(function () {
    const uiWidth = 375;    //根据ui设计稿适配
    const docEl = document.documentElement;
    //获取移动端屏幕是否进行了翻转，orientationchange是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (clientWidth > uiWidth) {
            clientWidth = uiWidth;
        }
        docEl.style.fontSize = 100 * (clientWidth / uiWidth) + 'px';
    };
    window.addEventListener(resizeEvt, recalc, false);
    //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
    document.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})();
