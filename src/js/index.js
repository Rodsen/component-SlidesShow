console.log ("rodsen");
// 图片组
var aImgs = document.getElementById("slider_main").children;
var oLeftBtn = document.getElementById("left_btn");
var oRightBtn = document.getElementById("right_btn");
var aCtrlBtns = document.getElementById("ctrl_btns").children;

// 轮播数组
var arr = [1,2,3,4,5,6];
// 全局定时器
var timer = null;
// 防止重复点击
var flag = true;

// 执行轮播效果
playSlide()

// 下一张按钮
oLeftBtn.onclick = function () {
    nextImg(1);
    playSlide();
};
// 上一张按钮
oRightBtn.onclick = function () {
    prevImg();
    playSlide();
};
// 控制按钮
for (var i = 0;i<aCtrlBtns.length;i++) {
    (function(){
        
        var j = i
        aCtrlBtns[i].onclick = function () {
            
            var imgIndex = arr.indexOf(j+1);
            if (flag) {
                nextImg(imgIndex);
                playSlide();
                flag = false;  
                }
        
            
        }
    })()
}

function nextImg(index) {
    var nPrev = arr[0]-1;
    setImgArr(index)
    var nShow = arr[0]-1;
    aImgs[nShow].style.left = 310+"px";
    buffer(aImgs[nShow],{left:0});
    buffer(aImgs[nPrev],{left:-310});
}


function prevImg() {
    var nPrev = arr[0]-1;
    reSetImgArr ();
    var nShow = arr[0]-1;
    buffer(aImgs[nPrev],{left:310});
    buffer(aImgs[nShow],{left:0});
    aImgs[nShow].style.left = -310+"px";
}

/**
 * 轮播效果
 */
function playSlide() {
    clearInterval(timer)
    timer = setInterval (function(){
        nextImg(1)
    },1000)
}
/**使数组前后交换
 * @param index: 交换长度
  **/
 function setImgArr (index) {
        flag = true;
        var aPrev = arr.splice(0,index)
        arr.push.apply(arr,aPrev); 
    }

/* 使数组逆向交换 */
function reSetImgArr () {
    var aPrev = arr.splice(-1,1)
    arr.unshift.apply(arr,aPrev); 
}