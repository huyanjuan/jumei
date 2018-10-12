<?php

   include "conn.php";

   if(isset($_GET['id'])){
       $id=$_GET['id'];
   }

   $result=mysql_query("select * from xinpin where id='$id' ");
   $xinpinarr=array();

   for($i=0;$i<mysql_num_rows($result);$i++){
       $xinpinarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
   }

   echo json_encode($xinpinarr);
?>