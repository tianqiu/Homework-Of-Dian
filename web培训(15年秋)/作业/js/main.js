		var nowImg = 1;
		var pre = 3;
		var next =2;
		var run = false;
	$(document).ready(function(){
		timedCount();
		$("#leftbutton").bind("click", function(){
			leftmove();
		});
		$("#rightbutton").bind("click", function(){
			rightmove();
		});
		$("#s6").mouseenter(function(){
   			$("#viewbutton6").css("opacity","1");
   			$("#s6img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "-15%",
				"top":"-15%",
				"width":"130%",
				"height":"130%",
				"opacity":"0.2"
			});
		});
		$("#s6").mouseleave(function(){
   			$("#viewbutton6").css("opacity","0");
   			$("#s6img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "0%",
				"top":"0%",
				"width":"100%",
				"height":"100%",
				"opacity":"1"
			});
		});
		$("#s5").mouseenter(function(){
   			$("#viewbutton5").css("opacity","1");
   			$("#s5img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "-15%",
				"top":"-15%",
				"width":"130%",
				"height":"130%",
				"opacity":"0.2"
			});
		});
		$("#s5").mouseleave(function(){
   			$("#viewbutton5").css("opacity","0");
   			$("#s5img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "0%",
				"top":"0%",
				"width":"100%",
				"height":"100%",
				"opacity":"1"
			});
		});
		$("#s3").mouseenter(function(){
   			$("#viewbutton3").css("opacity","1");
   			$("#s3img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "-15%",
				"top":"-15%",
				"width":"130%",
				"height":"130%",
				"opacity":"0.2"
			});
		});
		$("#s3").mouseleave(function(){
   			$("#viewbutton3").css("opacity","0");
   			$("#s3img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "0%",
				"top":"0%",
				"width":"100%",
				"height":"100%",
				"opacity":"1"
			});
		});
		$("#s2").mouseenter(function(){
   			$("#viewbutton2").css("opacity","1");
   			$("#s2img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "-15%",
				"top":"-15%",
				"width":"130%",
				"height":"130%",
				"opacity":"0.2"
			});
		});
		$("#s2").mouseleave(function(){
   			$("#viewbutton2").css("opacity","0");
   			$("#s2img").css({
				"-webkit-transition-duration" : "0.4s",
				"left" : "0%",
				"top":"0%",
				"width":"100%",
				"height":"100%",
				"opacity":"1"
			});
		});
		$("#decor").mouseenter(function(){
   			$("#decor").css({
				"-webkit-transition-duration" : "0.4s",
				"background":"rgb(186,210,214)",
				"color":"rgb(237,239,240);"
			});
		});
		$("#decor").mouseleave(function(){
   			$("#decor").css({
				"-webkit-transition-duration" : "0.4s",
				"background":"rgb(128,166,173)",
				"color":"#EDEFF0"
			});
		});
		$("#box").mouseenter(function(){
   			$("#numbers").css({
				"-webkit-transition-duration" : "0.5s",
				"opacity":"1"
			});
		});
		$("#box").mouseleave(function(){
   			$("#numbers").css({
				"-webkit-transition-duration" : "0.5s",
				"opacity":"0"
			});
		});
	});
	function rightmove()
	{
			pre = nowImg - 1;
			if(pre<1)
				{pre=3;}
			next = nowImg + 1;
			if(next>3)
				{next=1;}
			if(run){
				return;
			}
			run = true;
			var Img = $("#img"+nowImg);
			var PImg = $("#img"+pre);
			var NImg = $("#img"+next);
			Img.css({
				"-webkit-transition-duration" : "0.6s",
				"left" : "-100%"
			});
			PImg.css({
				"-webkit-transition-duration" : "0s",
				"left" : "100%"
			});
			NImg.css({
				"-webkit-transition-duration" : "0.6s",
				"left" : "0"
			});
			/*绑定过渡结束事件*/
			Img.bind("webkitTransitionEnd", function(){
				if(nowImg== 1)
					$("#numbers").html("1/3");
				else if(nowImg == 2)
					$("#numbers").html("2/3");
				else
					$("#numbers").html("3/3");
				run = false;
			});
			nowImg++;
			if(nowImg > 3){
				nowImg = 1;
			}
			pre = nowImg - 1;
			if(pre<1)
				{pre=3;}
			next = nowImg + 1;
			if(next>3)
				{next=1;}
	}
	function leftmove()
	{
			pre = nowImg - 1;
			if(pre<1)
				{pre=3;}
			next = nowImg + 1;
			if(next>3)
				{next=1;}
			if(run){
				return;
			}
			run = true;
			var Img = $("#img"+nowImg);
			var PImg = $("#img"+pre);
			var NImg = $("#img"+next);
			Img.css({
				"-webkit-transition-duration" : "0.6s",
				"left" : "100%"
			});
			PImg.css({
				"-webkit-transition-duration" : "0.6s",
				"left" : "0"
			});
			NImg.css({
				"-webkit-transition-duration" : "0s",
				"left" : "-100%"
			});
			/*绑定过渡结束事件*/
			Img.bind("webkitTransitionEnd", function(){
				if(nowImg == 1)
					$("#numbers").html("1/3");
				else if(nowImg == 2)
					$("#numbers").html("2/3");
				else
					$("#numbers").html("3/3");
				run = false;
			});
			nowImg--;
			if(nowImg < 1){
				nowImg = 3;
			}
			pre = nowImg - 1;
			if(pre<1)
				{pre=3;}
			next = nowImg + 1;
			if(next>3)
				{next=1;}
	}
function timedCount()
{
    rightmove();
    setTimeout(timedCount,4000);
}