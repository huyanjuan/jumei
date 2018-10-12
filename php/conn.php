<?php  
	header('content-type:text/html;charset=utf-8');
	//定义常量：值不能改变
	define('HOST','localhost');
	define('USERNAME','root');
	define('PASSWORD','');
	$conn=@mysql_connect(HOST,USERNAME,PASSWORD);
	if(!$conn){
		die('数据库链接失败:'.mysql_error());
	}

	mysql_select_db('jumeiyoupin');
	mysql_query('SET NAMES UTF8');

	
?>