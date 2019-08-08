$(function(){
var i=0;
var timer=null;
for (var j = 0; j < $('.imgs li').length; j++) { //创建圆点
$('.nums').append('<li></li>')
}
$('.nums li').first().addClass('active'); //给第一个圆点添加样式
var firstimg=$('.imgs li').first().clone(); //复制第一张图片
$('.imgs').append(firstimg).width($('.imgs li').length*($('.imgs img').width()));
//第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
$('.des').width($('.imgs li').length*($('.imgs img').width()));
// 下一个按钮
$('.next').click(function(){
i++;
if (i==$('.imgs li').length) {
i=1; //这里不是i=0
$('.imgs').css({left:0}); //保证无缝轮播，设置left值
};
$('.imgs').stop().animate({left:-i*240},300);
if (i==$('.imgs li').length-1) { //设置小圆点指示
$('.nums li').eq(0).addClass('active').siblings().removeClass('active');
$('.des li').eq(0).removeClass('hide').siblings().addClass('hide');
}else{
$('.nums li').eq(i).addClass('active').siblings().removeClass('active');
$('.des li').eq(i).removeClass('hide').siblings().addClass('hide');
}
})
// 上一个按钮
$('.prev').click(function(){
i--;
if (i==-1) {
i=$('.imgs li').length-2;
$('.imgs').css({left:-($('.imgs li').length-1)*300});
}
$('.imgs').stop().animate({left:-i*240},300);
$('.nums li').eq(i).addClass('active').siblings().removeClass('active');
$('.des li').eq(i).removeClass('hide').siblings().addClass('hide');
})
//设置按钮的显示和隐藏
$('.banner').hover(function(){
$('.btns').show();
},function(){
$('.btns').hide();
})
//鼠标划入圆点
$('.nums li').mouseover(function(){
var _index=$(this).index();
$('.imgs').stop().animate({left:-_index*240},300);
$('.nums li').eq(_index).addClass('active').siblings().removeClass('active');
$('.des li').eq(_index).removeClass('hide').siblings().addClass('hide');
})
//定时器自动播放
timer=setInterval(function(){
i++;
if (i==$('.imgs li').length) {
i=1;
$('.imgs').css({left:0});
};
$('.imgs').stop().animate({left:-i*240},300);
if (i==$('.img li').length-1) {
$('.nums li').eq(0).addClass('active').siblings().removeClass('active');
$('.des li').eq(0).removeClass('hide').siblings().addClass('hide');
}else{
$('.nums li').eq(i).addClass('active').siblings().removeClass('active');
$('.des li').eq(i).removeClass('hide').siblings().addClass('hide');
}
},3000)
//鼠标移入，暂停自动播放，移出，开始自动播放
$('.banner').hover(function(){
clearInterval(timer);
},function(){
timer=setInterval(function(){
i++;
if (i==$('.imgs li').length) {
i=1;
$('.imgs').css({left:0});
};
$('.imgs').stop().animate({left:-i*240},300);
if (i==$('.img li').length-1) {
$('.nums li').eq(0).addClass('active').siblings().removeClass('active');
$('.des li').eq(0).removeClass('hide').siblings().addClass('hide');
}else{
$('.nums li').eq(i).addClass('active').siblings().removeClass('active');
$('.des li').eq(i).removeClass('hide').siblings().addClass('hide');
}
},3000)
})
})