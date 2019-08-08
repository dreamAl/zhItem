	$(".mask").click(function(){
		$(".float_layer").show();
		$(".big_box").show();
	})
	$(".mask").mouseout(function(){
		$(".float_layer").hide();
		$(".big_box").hide();
	})
	
	// 1.计算数据
	// (1)获取数据
	$(".mask").mousemove(function(e){
		var event = event ||window.event;
		var left1 = e.pageX - $(".small_box").offset().left - ($(".float_layer").width()/2);
		var top1 = e.pageY - $(".small_box").offset().top - ($(".float_layer").height()/2);
		
		// (2)边界处理
		if(left1 < 0){
			left1 = 0;
		}else if(left1 > $(this).width() - $(".float_layer").width()){
			left1 = $(this).width() - $(".float_layer").width();
		}
		if(top1 < 0){
			top1 = 0;
		}else if(top1 > $(this).height() - $(".float_layer").height()){
			top1 = $(this).height() - $(".float_layer").height();
		}
		
		// 2.改变外观
		$(".float_layer").css({
			"left":left1,
			"top":top1
		})
		$(".big_box img").css({
			"left":-3*left1,
			"top":-3*top1
		})
	})