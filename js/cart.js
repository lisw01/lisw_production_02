/**
 * Created by Administrator on 2016/10/27 0027.
 */
window.onload = function () {
    checkBox();
    del();

};

function checkBox() {
    var checkB = document.getElementsByClassName('checkbox');
    console.log(checkB.length);
    for (var i = 0; i < checkB.length; i++) {
        checkB[i].onclick = function () {
            if (this.className == "checkbox") {
                this.className = '';
                this.className = 'checkbox-red';
            } else {
                this.className = '';
                this.className = "checkbox";
            }
        }

    }
}




function del() {
    var des = document.getElementsByClassName('waste');
    var box = document.getElementsByClassName('jd_win')[0];
    //定义全局变量up接住当前点击值
    var up = null;
    for (var i = 0; i < des.length; i++) {
        des[i].addEventListener('click',function () {
            box.style.display = 'block';
            var quObj = this;
            up = quObj.children[0];
            up.style.transition = 'all 1s ease 0s';
            up.style.webkitTransition = 'all 1s ease 0s';

            up.style.transform = 'translateY(-5px) translateX(-2px) rotate(-45deg)';
            up.style.webkitTransform = 'translateY(-5px) translateX(-2px) rotate(-45deg)';
            console.log(up);
        },false)
    }

    var can = document.getElementsByClassName('cancel')[0];
    var sub = document.getElementsByClassName('submit')[0];
    sub.onclick = function () {
        box.style.display = 'none';
        if(up) {
            console.log(up);

            up.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
            up.style.webkitTransform = 'translateY(0px) translateX(0px) rotate(0deg)';
        }

    };
    can.onclick = function () {
        box.style.display = 'none';

        if(up) {
            up.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
            up.style.webkitTransform = 'translateY(0px) translateX(0px) rotate(0deg)';
        }
    };
}
