
//全局变量
var ClientScreenWidth = 1920;
var ClientViewPortHeight


//Canvas绘图载入
var Animates = {
	List:[],
	Method:function(zr,Group){
			
		for(i in Group)
		{
			zr.add(Group[i].shape);
			//位移动画
			!Group[i].animateTo || Group[i].shape.animateTo(
				Group[i].animateTo,
				Group[i].animateTo.time || 800,
				Group[i].animateTo.delay || 0,
				Group[i].animateTo.easing || "backOut",
				Group[i].animateTo.callback || null
			); 
			//循环动画
			var _animate = !Group[i].animate || Group[i].shape.animate(Group[i].animate.attr, Group[i].animate.cycle || false);
			if(typeof _animate == "object")
			{	
				//延迟
				_animate.delay(Group[i].animate.delay || 0);
				
				//动作
				var _time = Group[i].animate.time || 1000;
				//缓动
				var _easing = Group[i].animate.easing || "linear"
				for(var j=0;j < Group[i].animate.when.length;j++) 
				{
					_animate.when(_time * (j+1), Group[i].animate.when[j].action)
				}
				//结束定义
				_animate.done((function(a){
                    _animate["time"]= a.time || 1000;
                    _animate["easing"]="linear";
                    return  a.done;
                })(Group[i].animate));
		_animate.start(Group[i].animate.easing || "linear");

			}
		}
	},
 };

 //重置画布
var resizeDom=function(dom){
    dom.css({
          width: ClientScreenWidth * dom.width(),
          height: ClientScreenWidth * dom.height()
      });
};

//跳转到URL
var gotoUrl=function(){
    switch (arguments[0].target) {
        case undefined:
        case "":
        case "_self":
            window.location = arguments[0].href;
            break;
        case "_blank":
            window.open(arguments[0].href);
            break;
        default:
             window.location = arguments[0].href;
            break;
        };
}

$(document).ready(function () {

    //屏幕宽
    ClientScreenWidth = document.body.clientWidth / 1920;

});