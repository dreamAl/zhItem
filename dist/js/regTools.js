
//封装正则
//参数：
// 正则类型（要判断的内容类型，如：电子邮箱，手机号码等等）
// 字符串
//返回值：true：符合，false：不符合 

// check(str,"email");

function check(str,type) {
	switch(type){
		case "username":var r =  /^[a-zA-Z_]\w{5,14}$/ ; break;
		//数字，字母，下划线，6,16
		case "userpass":var r =  /^\w{6,16}$/; break;
		case "email":var r =  /^[1-9a-zA-Z_]\w{5,17}@\w{2,10}\.(com|cn|net|com.cn)$/; break;
		case "post":var r =  /^[1-9]\d{5}$/ ; break;
		case "card":var r = /^[1-9]\d{5}[12]\d{3}(0[1-9]|1[0-2])\d{5}[0-9X]$/ ; break;
		case "userphone":var r =  /^1[3-9]\d{9}$/; break;
	}
	return r.test(str);
}