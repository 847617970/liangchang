$(function(){//大图滚动
	$("#wrap a:first").clone().appendTo($("#wrap"))
	var index = 0;
	var perWidth = $("#wrap a").eq(0).width();
	//小圆点
	$("#round span").on("mouseover",function(){
		// console.log($(this).index())//返回所点的原点的下标
		index = $(this).index();
		// console.log(-index*perWidth)
		$("#wrap").stop().animate({//停下其他的只执行这一个动画
			left:-index*perWidth
		})
		$(this).addClass("active").siblings().removeClass("active")
	})
	//下一张
	$("#right").on("click",function(){
		index++;
		if(index>$("#round span").size()-1){//size 与length 返回的是个数
			console.log($("#round span").size())
			$("#wrap").animate({
			left:-index*perWidth},function(){
				$("#wrap").css({left:0})

			})
			index = 0;
		}else{
			$("#wrap").animate({
			left:-index*perWidth
		})
		}
		$("#round span").eq(index).addClass("active").siblings().removeClass("active")
	})
	//上一张
	$("#left").on("click",function(){
		index--;
		if(index<0){
			$("#wrap").css({left:-($("#round span").size())*perWidth})
			index=$("#round span").size()-1;
		}
		$("#wrap").animate({
			left:-index*perWidth
		})
		$("#round span").eq(index).addClass("active").siblings().removeClass("active")
	})
	// 自动走
	var timer = setInterval(function(){
		$("#right").trigger("click")
	},4000)
	$("#wrap").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(function(){
		$("#right").trigger("click")
	},4000)
	})
})

var arr =[];
var imgList = document.getElementById("listImg");
var list = imgList.getElementsByTagName("li");
// 预加载
var beginNum = 0;
	for(var i =1;i<13; i++) {
		var img = new Image();
		img.src ="img/renderings"+i+".png";
		img.onload = function() {
			beginNum++;
			if(beginNum == 12) {
				// alert("图片都加载好了")
				 createImg()
			}
		}
	}
//图片数据
var data =["我是第一张图片","我是第二张图片","我是第三张图片","我是第四张图片","我是第五张图片","我是第六张图片","我是第七张图片","我是第八张图片","我是第九张图片","我是第十张图片","我是第十一张图片","我是第十二张图片",]
function rnd(min,max) {
  return parseInt(Math.random()*(max-min+1)) + min;
}

function createImg() {
  for(var i = 0; i < 13; i++) {
    var minList = list[0];
    for(var j = 0; j < list.length; j++) {
      if(minList.offsetHeight > list[j].offsetHeight) {
        minList = list[j];
      }
    var a=rnd(1,12)
    while(arr.indexOf(a)!=-1){
    	var a=rnd(1,12)
    }
    arr.push(a)
    if(arr.length>6){
    	arr.shift()
    }
    // var newImg = new Image();
    // newImg.src="img/renderings"+a+".png";
    // minList.appendChild(newImg);
    var newBlock = $("<div class='imgDiv'></div>");
    var newBlockContent='<img src="img/renderings'+a+'.png">'+'<p class="imgMask">'+
										'<span>'+data[a-1]+'</span>'+
									'</p>';
	newBlock.html(newBlockContent);
	$(minList).append(newBlock)
  }
}
}
$("#listImg").on("click",".imgDiv",function() {

  var img = $(this).children("img").clone();
  $("#mask").show();
  img.appendTo($("#frame")).siblings().remove();
  // console.log(img.context.naturalWidth)
  $("#frame").css({
    marginLeft:-img.width()/2,
    marginTop:-img.height()/2
  })
  console.log(img.width())

  $("#mask").on("click",function() {
    $(this).hide();
  })
  $("#frame").on("click",function(e) {
    e.stopPropagation();
  })
   console.log($("#frame").width())
})
  
window.onscroll = function() {
  if(imgList.getBoundingClientRect().bottom-300 <= document.documentElement.clientHeight) {
    createImg();
  }
}
window.onresize=function() {
  if(document.documentElement.clientWidth<=640) {
    if($("#listImg li").length>2){
      hehe=$("#listImg li").eq(0).clone();
      $("#listImg li").eq(0).remove();
    }
 }else if(document.documentElement.clientWidth>=640) {
  if($("#listImg li").length<3){
    hehe.appendTo($("#listImg"));
  }
  }
}
$(".bottom .delta").on("click",function(){
	$("html,body").stop().animate({
			scrollTop:0
		})
})

