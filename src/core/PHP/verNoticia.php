<?php
header('Access-Control-Allow-Origin: *'); 
	$con = mysql_connect("www.aielodemalferit.es", "aielo_poluser", "poli44nos"); 
	mysql_select_db("aielo_poligonos", $con);
	
		$sql= "select * from noticias";


		
	
	$res = mysql_query($sql, $con);

	$vacio=true;
	$i=0;
		while($row=mysql_fetch_assoc($res)){
			$jsonarray[$i]['id'] = $row['id'];
			$jsonarray[$i]['fecha'] = utf8_encode($row['fecha']);
			$jsonarray[$i]['title'] = utf8_encode($row['titulo']);
			$jsonarray[$i]['descripcion'] = utf8_encode($row['descripcion']);
			$jsonarray[$i]['imagen'] = utf8_encode($row['imagen']);
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
