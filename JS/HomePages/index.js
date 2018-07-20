
$(document).ready(function () {

//屏幕宽
var ClientScreenWidth = document.body.clientWidth / 1920;
//可视区域高
var ClientViewPortHeight = document.documentElement.clientHeight || document.body.clientHeight;;


var GraphGroup_1_2={
	circle_1 :{
		shape:new zrender.Circle({
				shape: {
						cx: ClientScreenWidth*952,
						cy: ClientScreenWidth*296,
						r: ClientScreenWidth*13
					},
				style: {
						fill: "#ffffd5",
						shadowColor:"yellow",
						shadowBlur:ClientScreenWidth*20
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + ClientScreenWidth*952,
							cy:Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + ClientScreenWidth*296
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);      
                                                
			},
			time:4000
		}
	},
	circle_2 :{
		shape:new zrender.Circle({
				shape: {
						cx: ClientScreenWidth*720,
						cy: ClientScreenWidth*309,
						r: ClientScreenWidth*6
					},
				style: {
						fill: "#ffffd5",
						shadowColor:"yellow",
						shadowBlur:ClientScreenWidth*10
						
					}
			}),
        animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + ClientScreenWidth*952,
							cy:Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + ClientScreenWidth*296
						}
					}
				],
            done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*100,ClientScreenWidth*(-100)) + this._target.cy,ClientScreenWidth*1080)
                 }).start(this.easing);        
                                                
			},
			time:4400
		}
        
	},
	circle_3 :{
		shape:new zrender.Circle({
				shape: {
						cx: ClientScreenWidth*498,
						cy: ClientScreenWidth*793,
						r: ClientScreenWidth*7
					},
				style: {
						fill: "#ffffd5",
						shadowColor:"yellow",
						shadowBlur:ClientScreenWidth*10
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*120,ClientScreenWidth*(-120)) + ClientScreenWidth*498,
							cy:Tools.Random(ClientScreenWidth*120,ClientScreenWidth*(-120)) + ClientScreenWidth*793
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*120,ClientScreenWidth*(-120)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*120,ClientScreenWidth*(-120)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:3300,
		}
	},
	circle_4 :{
		shape:new zrender.Circle({
				shape: {
						cx: ClientScreenWidth*1306,
						cy: ClientScreenWidth*823,
						r: ClientScreenWidth*10
					},
				style: {
						fill: "#ffffd5",
						shadowColor:"yellow",
						shadowBlur:ClientScreenWidth*15
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*1306,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*823
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:2100,
		}
	},
	circle_5 :{
		shape:new zrender.Sector({
				shape: {
						cx: ClientScreenWidth*398,
						cy: ClientScreenWidth*419,
						r: ClientScreenWidth*25,
						r0:ClientScreenWidth*20
					},
				style: {
						fill: "#c3cc61"
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*398,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*419
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:2100,
		}
	},
	circle_6 :{
		shape:new zrender.Sector({
				shape: {
						cx: ClientScreenWidth*1700,
						cy: ClientScreenWidth*232,
						r: ClientScreenWidth*25,
						r0:ClientScreenWidth*20
					},
				style: {
						fill: "#c3cc61"
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*1700,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*232
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:2100,
		}
	},
	circle_7 :{
		shape:new zrender.Sector({
				shape: {
						cx: ClientScreenWidth*154,
						cy: ClientScreenWidth*618,
						r: ClientScreenWidth*10,
						r0:ClientScreenWidth*5
					},
				style: {
						fill: "#c3cc61"
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*154,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*618
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*310,ClientScreenWidth*(-310)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*310,ClientScreenWidth*(-310)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:2500,
		}
	},
	circle_8 :{
		shape:new zrender.Sector({
				shape: {
						cx: ClientScreenWidth*1542,
						cy: ClientScreenWidth*422,
						r: ClientScreenWidth*10,
						r0:ClientScreenWidth*5
					},
				style: {
						fill: "#c3cc61"
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*1542,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*422
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*310,ClientScreenWidth*(-310)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*310,ClientScreenWidth*(-310)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:2500,
		}
	},
	circle_9 :{
		shape:new zrender.Sector({
				shape: {
						cx: ClientScreenWidth*355,
						cy: ClientScreenWidth*870,
						r: ClientScreenWidth*69,
						r0:ClientScreenWidth*64
					},
				style: {
						fill: "#3c21f3"
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*355,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*870
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*210,ClientScreenWidth*(-210)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*210,ClientScreenWidth*(-210)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:5000,
		}
	},
	circle_10 :{
		shape:new zrender.Sector({
				shape: {
						cx: ClientScreenWidth*1355,
						cy: ClientScreenWidth*870,
						r: ClientScreenWidth*112,
						r0:ClientScreenWidth*102
					},
				style: {
						fill: "#3c21f3"
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*1355,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*870
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*210,ClientScreenWidth*(-210)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*210,ClientScreenWidth*(-210)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:6000,
		}
	},
	circle_11 :{
		shape:new zrender.Sector({
				shape: {
						cx: ClientScreenWidth*1455,
						cy: ClientScreenWidth*270,
						r: ClientScreenWidth*40,
						r0:ClientScreenWidth*30
					},
				style: {
						fill: "#3c21f3"
						
					}
			}),
		animate:{
			attr:"shape",
			cycle:false,
			when:[
					{
						action:{
							cx:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*1455,
							cy:Tools.Random(ClientScreenWidth*110,ClientScreenWidth*(-110)) + ClientScreenWidth*270
						}
					}
				],
			done:function(){
				this.when(this.time, {
				cx:Tools.OverLayout(Tools.Random(ClientScreenWidth*230,ClientScreenWidth*(-230)) + this._target.cx,ClientScreenWidth*1920),
				cy:Tools.OverLayout(Tools.Random(ClientScreenWidth*230,ClientScreenWidth*(-230)) + this._target.cy,ClientScreenWidth*1080)
				}).start(this.easing);
			},
			time:3000,
		}
	},
	line_1 :{
		shape:new zrender.BezierCurve({
				shape: {
						x1: 0,
						y1: ClientScreenWidth*530,
						cpx1:ClientScreenWidth*451,
						cpy1:ClientScreenWidth*1310,
						cpx2:ClientScreenWidth*144,
						cpy2:ClientScreenWidth*207,
						x2: ClientScreenWidth*553,
						y2:ClientScreenWidth*713,
						percent:0
					},
				style: {
						stroke: "#ffffd5",
						shadowColor:"white",
						shadowBlur:ClientScreenWidth*20,
						opacity:0.7
					}
			}),
		animateTo:{
				shape:{
					percent:1
				},
				time:4000
			}
	},
	line_2 :{
		shape:new zrender.BezierCurve({
				shape: {
						x1: ClientScreenWidth*1920,
						y1: ClientScreenWidth*655,
						cpx1:ClientScreenWidth*1500,
						cpy1:ClientScreenWidth*-100,
						cpx2:ClientScreenWidth*1800,
						cpy2:ClientScreenWidth*900,
						x2: ClientScreenWidth*1373,
						y2:ClientScreenWidth*510,
						percent:0
					},
				style: {
						stroke: "#ffffd5",
						shadowColor:"white",
						shadowBlur:ClientScreenWidth*20,
						opacity:0.7
					}
			}),
		animateTo:{
				shape:{
					percent:1
				},
				time:4000
			}
	},

};


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
 
var zr_1_2 = zrender.init(document.getElementById('zr_1_2'));

//重置画布

zr_1_2.resize({
	width:ClientScreenWidth*1920,
	height:ClientScreenWidth*1080
});


//注册事件（开始）
Tools.Observer
.register("GraphGroup_1_2|start",function(){
		Animates.Method(zr_1_2,GraphGroup_1_2);
		Tools.Observer.remove("GraphGroup_1_2|start");
})

Tools.Observer.fire("GraphGroup_1_2|start");



});