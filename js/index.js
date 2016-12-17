/**
 * Created by lisw on 2016
 */
window.onload = function () {
    //头部背景
    headerBgc();
    //倒计时
    daoJiShi();
    //轮播图
    lunBo();
};

function headerBgc() {
    //搜索框
    var bgc = document.getElementsByClassName('header-container')[0];
    //轮播图框
    var car = document.getElementsByClassName('carousel')[0];
    var height = car.offsetHeight;
    window.onscroll = function () {
        var t = document.body.scrollTop;
        if (t >= height) {
            bgc.style.background = 'rgba(200, 0, 0, 0.85)';
        } else {
            var bianLiang = t / height * 0.85;
            bgc.style.background = 'rgba(200, 0, 0, ' + bianLiang + ')';
        }
    };
}

function daoJiShi() {
    //获取父盒子
    var fu = document.getElementsByClassName('kill-s-kill-top-ms')[0];

    var zi = fu.getElementsByClassName('num');

    //秒
    var time = 15 * 60 * 60;

    var timer = null;

    //开启定时器
    timer = setInterval(function () {
        time--;
        var h = Math.floor(time / 60 / 60);

        var f = Math.floor(time / 60 % 60);

        var m = time % 60;

        zi[0].innerHTML = h > 10 ? Math.floor(h / 10) : 0;
        zi[1].innerHTML = h % 10;

        zi[2].innerHTML = f > 10 ? Math.floor(f / 10) : 0;
        zi[3].innerHTML = f % 10;

        zi[4].innerHTML = m > 10 ? Math.floor(m / 10) : 0;
        zi[5].innerHTML = m % 10;

        if (time <= 0) {
            clearInterval(timer);
        }
    }, 1000);

}

//轮播图
function lunBo() {
    var ul = document.getElementsByClassName('carousel-img')[0];
    var lis = ul.children;
    var width = lis[0].offsetWidth;
    //索引值初始化1
    var index = 1;
    //定时器
    var timer = null;
    //控制按钮索引
    var ctrlIndex = 0;
    timer = setInterval(function () {
        index++;

        guoDu();
        move(-(index * width));

        ctrlChang();

    }, 3000);

    function move(t) {
        ul.style.transform = "translateX(" + t + "px)";
        ul.style.webkitTransform = "translateX(" + t + "px)";
    }

    function guoDu() {
        ul.style.transition = "all 0.5s ease 0s";
        ul.style.webkitTransition = "all 0.5s ease 0s";
    }

    function remove() {
        ul.style.transition = "none";
        ul.style.webkitTransition = "none";
    }

    ul.addEventListener('transitionEnd', function () {
        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        remove();
        move(-(index * width));
    }, false);

    ul.addEventListener('webkitTransitionEnd', function () {
        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        remove();
        move(-(index * width));
    }, false);

    //控制键
    var ulli = document.getElementsByClassName('ctal')[0];
    var ctrl = ulli.children;


    function ctrlChang() {
        ctrlIndex++;
        if (ctrlIndex > ctrl.length - 1) {
            ctrlIndex = 0;
        }
        for (var i = 0; i < ctrl.length; i++) {
            ctrl[i].className = '';
        }
        ctrl[ctrlIndex].className = 'curr';
    }

    function ctrlChangLeft() {
        ctrlIndex--;
        if (ctrlIndex < 0) {
            ctrlIndex = 7;
        }
        for (var i = 0; i < ctrl.length; i++) {
            ctrl[i].className = '';
        }
        ctrl[ctrlIndex].className = 'curr';
    }

    for (var i = 0; i < ctrl.length; i++) {
        ctrl[i].index = i;
        ctrl[i].addEventListener('click', function () {
            for (var j = 0; j < ctrl.length; j++) {
                ctrl[j].className = '';
            }
            this.className = 'curr';
            guoDu();
            ctrlIndex = this.index;
            index = this.index + 1;
            move(-index * width);
        }, false)
    }


    ul.addEventListener('mousemove', function (e) {
        clearInterval(timer);
    });
    ul.addEventListener('mouseout', function (e) {
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            guoDu();
            move(-(index * width));

            ctrlChang();

        }, 3000);
    });


//左右滑动事件
    var ctrl1 = $('.carousel');
    var stsrtx = 0;
    var endx = 0;
    var lingMin = 26;

    ctrl1.on("touchstart", function (e) {
        //滑动第一个点
        stsrtx = e.touches[0].clientX;

    });
    ctrl1.on("touchmove", function (e) {
        //滑动第二个点
        endx = e.touches[0].clientX;

    });
    ctrl1.on("touchend", function (e) {
        var weiYi = Math.abs(endx - stsrtx);
        //如果他们的的差大于26就执行下面的代码
        if (weiYi > lingMin) {
            //如果开始的时候大于结尾 向左滑动
            if (stsrtx > endx) {
                index++;
                guoDu();
                move(-(index * width));
                ctrlChang();

            } else {
                //向右滑行
                index--;
                if (index < 0) {
                    index = 8;
                }
                guoDu();
                move(-(index * width));
                ctrlChangLeft();
            }
        }


    });


    //调转页面
    var As = $('a');
    for (var i = 0; i < As.length; i++) {
        $(As[i]).attr({
            href:'classify.html',
        });

    }


}
