<?php
	header('Access-Control-Allow-Origin: *');
	$con = mysql_connect("www.aielodemalferit.es", "aielo_poluser", "poli44nos"); 
	mysql_select_db("aielo_poligonos", $con);
	
		$sql= "SELECT * FROM poligono ";

	
	$res = mysql_query($sql, $con);

	$vacio=true;
	$i=0;
		while($row=mysql_fetch_assoc($res)){
			$jsonarray[$i]['id'] = $row['id'];
			$jsonarray[$i]['title'] = utf8_encode($row['nombre']);
			$jsonarray[$i]['photo'] = utf8_encode($row['photo']);
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
