<?php
	header("Content-type:text/html;charset=utf-8");

	//1、接受前端的输入（接受前端传来的数据）；

	$username = $_GET['username'];//接受到用户名
	
	//2、保存
	//1)、建立连接
	$conn = mysql_connect('localhost','root','qianfeng');

	if(!$conn){
		die('连接失败');
	}
	//2)、选择数据库
	mysql_select_db('mydb1905',$conn);

	//3)、执行SQL语句
	$sqlstr="select * from students where username='$username'";
	// echo $sqlstr
	$result = mysql_query($sqlstr);// $result:是表格（查询结果）


	//4)、关闭数据库
	mysql_close($conn);

	//3、响应
	//判断查询出来的表格的行数。
	$rows = mysql_num_rows($result);

	if($rows>=1){
		echo 1;
	}else{
		echo 0;
	}
?>