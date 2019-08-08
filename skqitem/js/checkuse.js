//正则验证
function check(str, type) {
	switch (type) {
		case "username":
			var r = /^[a-zA-Z_]\w{5,14}$/;
			break;
			//数字，字母，下划线，6,16
		case "userpass":
			var r = /^\w{6,16}$/;
			break;
		case "userphone":
			var r = /^1[3-9]\d{9}$/;
			break;
	}
	return r.test(str);
}

function ajaxByPromise(url,method,params,isAsync){
	//1、创建对象
	let xhr = new XMLHttpRequest();

	//产生请求参数的字符串：循环把json对象转换为形如这样的格式：key1=value1&key2=value2
	let sendstr = '';
	for(let key in params){
		sendstr += `${key}=${params[key]}&`;
		// sendstr += key+"="+params[key]+"&"
	}
	if(sendstr.length>0){
		sendstr = sendstr.substring(0,sendstr.length-1); //musicname=你
	}
	
	let urlAndParam = url;//getMusic.php
	//如果是get方式，并且有请求参数，那么就把url和请求参数用问号隔开
	if(method.toLowerCase()=="get" && sendstr!=""){
		urlAndParam+= "?"+sendstr;//getMusic.php?musicname=你
	}

	//2、设置请求参数
	xhr.open(method,urlAndParam,isAsync);

	let p = new Promise(function(resolve,reject){
		//3、设置回调函数
		xhr.onreadystatechange = function(){			
			if(xhr.readyState==4){
				if(xhr.status==200){
					if(resolve){
						resolve(xhr.responseText);
					}
				}else{
					if(reject){
						reject("服务器出错了");
					}
				}
			}
		}
	});

	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(sendstr);
	}else{
		//4、发送请求
		xhr.send();	
	}
	return p;
}
// 注册验证
var arr = ["username","userpass","userphone"];
document.getElementById(`userpassId`).onblur = function(){
	if(check(this.value,"userpass")){
		this.nextElementSibling.innerHTML = "√";
	}else{
		this.nextElementSibling.innerHTML = "×";
	}
}
 
document.getElementById(`userphoneId`).onblur = function(){
	if(check(this.value,"userphone")){
		this.nextElementSibling.innerHTML = "√";
	}else{
		this.nextElementSibling.innerHTML = "×";
	}
}

document.getElementById("checkpass").onblur = function(){
	if(checkpass()){
		this.nextElementSibling.innerHTML = "√";
	}else{
		this.nextElementSibling.innerHTML = "×";
	}
}

document.getElementById(`usernameId`).onblur = function(){
	this.nextElementSibling.innerHTML = "";
	// console.log(this.value)
	// console.log("username")
	if(check(this.value,"username")){//前端验证
		// console.log($("#usernameId"))
		//后端验证
		ajaxByPromise("checkuser.php","get",{username:document.getElementById("usernameId").value},true)
		.then(

			 	(str)=>{
			 		console.log(str)
					if(str=="1"){
						this.nextElementSibling.innerHTML = "用户名已经存在";
					}else{
						this.nextElementSibling.innerHTML = "√";
					}
				},
				(str)=>{
			 		alert(str);
			 	}
		);
	}else{
		this.nextElementSibling.innerHTML = "x";
	}
}
//注册按钮绑定事件
document.getElementById("btnReg").onclick = function(){
	//1、先看前端验证是否全部通过
	if(!frontCheck() || !checkpass()){
		alert("亲，请把信息输入正确!");
		return;
	}
	//2、后端注册
	ajaxByPromise("checkuser.php","get",{username:document.getElementById("usernameId").value},true)
		.then(
			 	(str)=>{
					if(str!="1"){
						regSave();
					}else{
						alert("用户名已经存在！");
					}
				},
				(str)=>{
			 		alert(str);
			 	}
		); 
}
//前端验证
function frontCheck(){
	for(let i in arr){
		if(!check($(`#${arr[i]}Id`).value,arr[i])){
			return false;
		}
	}
	return true;
}

//重复密码的验证
function checkpass(){
	return document.getElementById("userpassId").value == document.getElementById("checkpass").value;
}

//用户名是否存在
var isExistsUser = false;
//后端验证用户名是否存在
function afterCheckUser(func){
	 
}
//后端注册
function regSave(){
	let sexs = document.getElementsByName("sex");
	if(sexs[0].checked==true){
		var sex=sexs[0].value;
	}else{
		var sex=sexs[1].value;
	}
	ajaxByPromise(
		"regSave03.php",
		"post",
		{
			username:document.getElementById("usernameId").value,
		    userpass:document.getElementById("userpassId").value,
		    sex:sex,
		    userphone:document.getElementById("userphoneId").value
		},
		true
		).then(
		(str)=>{
			if(str==1){
				document.getElementById("msg").innerHTML = "亲，恭喜您，注册成功！跳转到登录页面";
			}else{
				document.getElementById("msg").innerHTML = "亲，不好意思，注册失败！请重新输入内容";
			}
		},(str)=>{
			alert(str);
		});
}
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}