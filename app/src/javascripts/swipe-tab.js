module.exports={
    init:function(ele){
        var box = ele.get(0);
        var swiper = new TabSwiper(box, {
          speed: 300,
          threshold: 100,
          isPullDown: true,
          isPullUp: true,
          closeInertia: false,
          xThreshold: 0.3,
          defaultPage: 0,
          initCb: function () {
            console.log('初始化完成')
            var spans = document.querySelectorAll('.tabs span')
            for(var i = 0; i < spans.length; i++) {
              (function (page) {
                spans[page].onclick = function () {
                  swiper.changePage(page)
                }
              })(i)
            }
          },
          onRefreshStart: function () {
            var pullDownshow1 = document.querySelector('.pullDownshow1')
            var pullDownshow2 = document.querySelector('.pullDownshow2')
            pullDownshow1.style.display = 'none'
            pullDownshow2.style.display = 'block'
            setTimeout(function () {
              swiper.pullEnd(function (page) {
                pullDownshow1.style.display = 'block'
                pullDownshow2.style.display = 'none'
                console.log('刷新结束----' + page)
              })
            }, 3000)
          },
          onLoadStart: function () {
            var pullUpHtmlshow1 = document.querySelector('.pullUpHtmlshow1')
            var pullUpHtmlshow2 = document.querySelector('.pullUpHtmlshow2')
            pullUpHtmlshow1.style.display = 'none'
            pullUpHtmlshow2.style.display = 'block'
            setTimeout(function () {
              swiper.pullEnd(function (page) {
                pullUpHtmlshow1.style.display = 'block'
                pullUpHtmlshow2.style.display = 'none'
                console.log('加载结束----' + page)
              })
            }, 3000)
          },
          onEnd: function (page) {
            console.log('当前所在----' + page)
            var spans = document.querySelectorAll('.tabs span')
            for(var i = 0; i < spans.length; i++) {
              if (i != page) spans[i].className = ''
              else spans[i].className = 'active'
            }
          },
          onTouchmove: function (page, e) {
            console.log('正在拖动...')
          }
        })
    }
}