	function A(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

 
// 注册登录隐藏项
	// A("#dengL").onclick=function(){
	// 	A("#dengBox").style.display="block";
	// 	A("#heng").style.display="block";
	// }
	//  document.onclick = function(event) {
 //        var event = event || window.event;
 //        var targetId = event.target ? event.target.id : event.srcElement.id;
 //        if(targetId != "dengL"){
 //            A("#dengBox").style.display = "none";
 //            A("#heng").style.display = "none";
 //        }
 //    }

A(".nav1")[0].onmouseover=function(){
		A(".navBox")[0].style.display="block";
		A(".WomenBox")[0].style.display="none";
		A(".manChildBox")[0].style.display="none";
		A(".womenChildBox")[0].style.display="none";
		A(".zt")[0].style.display="none";
		A(".super")[0].style.display="none";
	}
	A(".navBox")[0].onmouseover=function(){
		A(".navBox")[0].style.display="block";
	}
	A(".nav1")[0].onmouseout=function(){
		A(".navBox")[0].style.display="none";
	}
	A(".navBox")[0].onmouseout=function(){
		A(".navBox")[0].style.display="none";
	}
	A(".nav2")[0].onmouseover=function(){
		A(".navBox")[0].style.display="none";
		A(".WomenBox")[0].style.display="block";
		A(".manChildBox")[0].style.display="none";
		A(".womenChildBox")[0].style.display="none";
		A(".zt")[0].style.display="none";
		A(".super")[0].style.display="none";
	}
	A(".WomenBox")[0].onmouseover=function(){
		A(".WomenBox")[0].style.display="block";
	}
	A(".nav2")[0].onmouseout=function(){
		A(".WomenBox")[0].style.display="none";
	}
	A(".WomenBox")[0].onmouseout=function(){
		A(".WomenBox")[0].style.display="none";
	}
	A(".nav3")[0].onmouseover=function(){
		A(".manChildBox")[0].style.display="block";
		A(".navBox")[0].style.display="none";
		A(".WomenBox")[0].style.display="none";
		A(".womenChildBox")[0].style.display="none";
		A(".zt")[0].style.display="none";
		A(".super")[0].style.display="none";
	}
	A(".manChildBox")[0].onmouseover=function(){
		A(".manChildBox")[0].style.display="block";
	}
	A(".manChildBox")[0].onmouseout=function(){
		A(".manChildBox")[0].style.display="none";
	}
	A(".nav4")[0].onmouseover=function(){
		A(".womenChildBox")[0].style.display="block";
		A(".manChildBox")[0].style.display="none";
		A(".navBox")[0].style.display="none";
		A(".WomenBox")[0].style.display="none";
		A(".zt")[0].style.display="none";
		A(".super")[0].style.display="none";
	}
	A(".womenChildBox")[0].onmouseover=function(){
		A(".womenChildBox")[0].style.display="block";
	}
	A(".womenChildBox")[0].onmouseout=function(){
		A(".womenChildBox")[0].style.display="none";
	}
	A(".nav5")[0].onmouseover=function(){
		A(".zt")[0].style.display="block";
		A(".womenChildBox")[0].style.display="none";
		A(".manChildBox")[0].style.display="none";
		A(".navBox")[0].style.display="none";
		A(".WomenBox")[0].style.display="none";
		A(".super")[0].style.display="none";
	}
	A(".zt")[0].onmouseover=function(){
		A(".zt")[0].style.display="block";
	}
	A(".zt")[0].onmouseout=function(){
		A(".zt")[0].style.display="none";
	}
		A(".nav6")[0].onmouseover=function(){
		A(".super")[0].style.display="block";
			A(".zt")[0].style.display="none";
		A(".womenChildBox")[0].style.display="none";
		A(".manChildBox")[0].style.display="none";
		A(".navBox")[0].style.display="none";
		A(".WomenBox")[0].style.display="none";
	}
	A(".super")[0].onmouseover=function(){
		A(".super")[0].style.display="block";
	}
	A(".super")[0].onmouseout=function(){
		A(".super")[0].style.display="none";
	}
	A(".zt")[0].onmouseout=function(){
		A(".zt")[0].style.display="none";
	}
 
//点击按钮回顶部

window.onscroll = function() {
     scrollFunction()
 };
  
 function scrollFunction() {
    //console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("btnTop").style.display = "block";
     } else {
         document.getElementById("btnTop").style.display = "none";
     }
 }

 function returnTop() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }


