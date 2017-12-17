<?php
	$con = mysql_connect("localhost", "root", ""); 
	mysql_select_db("poligono", $con);
	
		$sql= "select * from noticias";


		
	
	$res = mysql_query($sql, $con);

	$vacio=true;
	$i=0;
		while($row=mysql_fetch_assoc($res)){
			$jsonarray[$i]['id'] = $row['id'];
			$jsonarray[$i]['fecha'] = utf8_encode($row['fecha']);
			$jsonarray[$i]['titulo'] = utf8_encode($row['titulo']);
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