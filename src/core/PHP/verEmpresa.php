<?php
	header('Access-Control-Allow-Origin: *');
	$con = mysql_connect("websalvaxzjuan.mysql.db", "websalvaxzjuan", "Juanito123"); 
	mysql_select_db("websalvaxzjuan", $con);
	
		$sql= "SELECT e.id, e.nombre, s.nombre as 'id_sector', e.direccion,p.nombre as 'id_poligono', e.telefono, e.movil, e.fax, e.email, e.web, e.descripcion, e.foto FROM empresa e INNER JOIN sector s on s.id=e.id_sector INNER JOIN poligono p on p.id=e.id_poligono ";


		
	
	$res = mysql_query($sql, $con);

	$vacio=true;
	$i=0;
		while($row=mysql_fetch_assoc($res)){
			$jsonarray[$i]['id'] = $row['id'];
			$jsonarray[$i]['title'] = utf8_encode($row['nombre']);
			$jsonarray[$i]['sector'] = utf8_encode($row['id_sector']);
			$jsonarray[$i]['adress'] = utf8_encode($row['direccion']);
			$jsonarray[$i]['poligono'] = utf8_encode($row['id_poligono']);
			$jsonarray[$i]['telefono'] = utf8_encode($row['telefono']);
			$jsonarray[$i]['movil'] = utf8_encode($row['movil']);
			$jsonarray[$i]['fax'] = utf8_encode($row['fax']);
			$jsonarray[$i]['email'] = utf8_encode($row['email']);
			$jsonarray[$i]['web'] = utf8_encode($row['web']);
			$jsonarray[$i]['description'] = utf8_encode($row['descripcion']);
			$jsonarray[$i]['photo'] = utf8_encode($row['foto']);
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
