<?php
	header('Access-Control-Allow-Origin: *');
	$con = mysql_connect("websalvaxzjuan.mysql.db", "websalvaxzjuan", "Juanito123"); 
	mysql_select_db("websalvaxzjuan", $con);

	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body);

	$nombre = $data->nombre;
	$id_sector = $data->sector;
	$direccion = $data->direccion;
	$id_poligono = $data->poligono;
	$telefono = $data->telefono;
	$movil = $data->movil;
	$email = $data->email;
	$web = $data->web;
	$descripcion = $data->description;
	$foto = $data->photo;
	$lati = $data->lati;
	$longi = $data->longi;



	
		$sql= "INSERT INTO poligono ( `nombre`, `id_sector`, `direccion`, `id_poligono`, `telefono`, `movil`, `email`, `web`, `descripcion`, `foto`, `lati`, `longi`)  VALUES (
" .$nombre."
," .$id_sector."
," .$direccion."
," .$id_poligono."
," .$telefono."
," .$movil."
," .$email."
," .$web."
," .$descripcion."
," .$lati."
," .$longi.".") ";


		
	
	$res = mysql_query($sql, $con);

	$i=0;
	if(!$res){
		$jsonarray[$i]['resultat'] = false;
	}else{
		$jsonarray[$i]['resultat'] = true;	
	}
	echo json_encode($jsonarray);
?>
