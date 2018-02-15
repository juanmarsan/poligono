<?php
header('Access-Control-Allow-Origin: *'); 
$con = mysql_connect("websalvaxzjuan.mysql.db", "websalvaxzjuan", "Juanito123"); 
	mysql_select_db("websalvaxzjuan", $con);
	
		$sql= "select * from sector";


		
	
	$res = mysql_query($sql, $con);

	$vacio=true;
	$i=0;
		while($row=mysql_fetch_assoc($res)){
			$jsonarray[$i]['id'] = $row['id'];
			$jsonarray[$i]['nombre'] = utf8_encode($row['nombre']);
			$i++;
			$vacio=false;
		}

	
	

	if($vacio==true){
		$jsonarray[$i]['resultat'] = false;
		echo json_encode($jsonarray);
	}else{
		echo json_encode($jsonarray);
	}
	
?>
