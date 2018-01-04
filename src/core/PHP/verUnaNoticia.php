<?php
header('Access-Control-Allow-Origin: *'); 
$con = mysql_connect("websalvaxzjuan.mysql.db", "websalvaxzjuan", "Juanito123"); 
	mysql_select_db("websalvaxzjuan", $con);
	
		


	$sql = "SELECT * FROM noticias where id='".$_GET["id"]."'";
	$res = mysql_query($sql, $con);

	$vacio=true;
	$i=0;
		while($row=mysql_fetch_assoc($res)){
			$jsonarray[$i]['id'] = $row['id'];
			$jsonarray[$i]['fecha'] = utf8_encode($row['fecha']);
			$jsonarray[$i]['title'] = utf8_encode($row['titulo']);
			$jsonarray[$i]['descripcion'] = utf8_encode($row['descripcion']);
			$jsonarray[$i]['photo'] = utf8_encode($row['imagen']);
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
