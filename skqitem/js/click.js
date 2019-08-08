var Li=document.getElementById("uL").getElementsByTagName("li");
var diV=document.getElementById("mains").getElementsByTagName("div");
var  mains=document.getElementById("mains");
var a=true;
// 添加点击事件

for ( var i=0;i<Li.length;i++) {
    //序号 i 存入 index属性
    Li[i].index=i;
    Li[i].onclick=function () {
        if(!a){
            return;
        }
        a=false;
        setTimeout(function () {
            a=true; 
        },1000);
        for ( var j=0;j<Li.length;j++){
            console.log(this.index);
            Li[j].className ="";
            diV[j].className ="";
            Li[this.index].style.cssText =`border:1px solid #c5c5c5`;
        }
        Li[this.index].className ="on";
        mains.style.marginTop= (0-(this.index*640)+"px");       
    }
} 