<?php
	include "conn.php";
	
	

	if(isset($_POST['username']) || isset($_POST['submit'])){
		$username=@$_POST['username'];
	}else{
		exit('非法操作');
	}
	
	
	
	$query="select * from registorlogin where username='$username'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){
		echo 'false';
	}else{
		echo 'true';
	}
	
	
	if(isset($_POST['submit']) && $_POST['submit']=="同意协议并注册"){
		$user=$_POST['username'];
		$pass=md5($_POST['password']);
		$query="insert registorlogin(id,username,password,date) values(null,'$user','$pass',NOW())";
		mysql_query($query);
		header('location:http://10.31.162.25/jumeiyoupin/src/login.html');
	}
?>