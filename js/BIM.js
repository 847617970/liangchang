$(function(){
	var pos=[];
	$(".list").each(function(index,key){
		pos.push(parseInt($(key).position().top))
	})
	console.log(pos)

$(document).bind("mousewheel DOMMouseScroll",function(e){
	e.preventDefault();
	var sTop=$(document).scrollTop();
	if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
		if(sTop <= pos[0]) {
			$("html,body").stop().animate({
				scrollTop:0
			})
			}else if(sTop <= pos[1] && sTop > pos[0]) {
				$("html,body").stop().animate({
					scrollTop:pos[0]
				})
			}else if(sTop <= pos[2] && sTop > pos[1]) {
				$("html,body").stop().animate({
					scrollTop:pos[1]
				})
			}else if(sTop <= pos[3] && sTop > pos[2]) {
				$("html,body").stop().animate({
					scrollTop:pos[2]
				})
			}else if(sTop <= pos[4] && sTop > pos[3]) {
				$("html,body").stop().animate({
					scrollTop:pos[3]
				})
			}else if(sTop>pos[4]) {
				$("html,body").stop().animate({
					scrollTop:pos[4]
				})
			}else{
				$("html,body").stop().animate({
					scrollTop:pos[5]
				})
			}
	}else{
		if(sTop < pos[0]) {
			$("html,body").stop().animate({
				scrollTop:pos[0]
			})
			}else if(sTop >= pos[0] && sTop < pos[1]) {
				$("html,body").stop().animate({
					scrollTop:pos[1]
				})
			}else if(sTop >= pos[1] && sTop < pos[2]) {
				$("html,body").stop().animate({
					scrollTop:pos[2]
				})
			}else if(sTop >= pos[2] && sTop < pos[3]) {
				$("html,body").stop().animate({
					scrollTop:pos[3]
				})
			}else if(sTop >= pos[3] && sTop < pos[4]) {
				$("html,body").stop().animate({
					scrollTop:pos[4]
				})
				console.log(sTop)
			}else if(sTop >= pos[4]) {
				$("html,body").stop().animate({
					scrollTop:$("footer").position().top
				})
				console.log(sTop)
			}
		}
	})
		$(window).on("resize",function() {
			// $(".list").height($(window).height());
			pos = [];
			$(".list").each(function(index,key) {
				pos.push(parseInt($(key).position().top))
			})
		})
		$(".bottom .delta").on("click",function(){
			$("html,body").stop().animate({
					scrollTop:0
				})
		})
})