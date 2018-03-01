<?php
header('Access-Control-Allow-Origin: *'); 
$con = mysql_connect("websalvaxzjuan.mysql.db", "websalvaxzjuan", "Juanito123"); 
	mysql_select_db("websalvaxzjuan", $con);
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body);
	//var_dump($data) ;
echo' entra   ';
foreach ($data as  $empresa) {echo'aqui entra   ';

	if($empresa->id !=""){
		$sql="UPDATE empresa SET
			nombre='".utf8_decode($empresa->title)."'
			,id_sector='".$empresa->idsector)."'
			,direccion='".utf8_decode($empresa->adress)."'
			,id_poligono='" .$empresa->idpoligono."'
			,telefono='" .utf8_decode($empresa->telefono)."'
			,movil='" .utf8_decode($empresa->movil)."'
			,email='" .utf8_decode($empresa->email)."'
			,web='" .utf8_decode($empresa->web)."'
			,descripcion='" .utf8_decode($empresa->description)."'
			,foto='" .utf8_decode($empresa->photo)."'
			,lati='" .utf8_decode($empresa->lati)."'
			,longi='" .utf8_decode($empresa->longi)."' 

		WHERE id=".$empresa->id;

	}else{
echo'1   ';
		$sql= "INSERT INTO empresa ( nombre, id_sector, direccion, id_poligono, telefono, movil, email, web, descripcion, foto, lati, longi)  VALUES (
			'".utf8_decode($empresa->title)."'
			,'" .$empresa->idsector."'
			,'" .utf8_decode($empresa->adress)."'
			,'" .$empresa->idpoligono."'
			,'" .utf8_decode($empresa->telefono)."'
			,'" .utf8_decode($empresa->movil)."'
			,'" .utf8_decode($empresa->email)."'
			,'" .utf8_decode($empresa->web)."'
			,'" .utf8_decode($empresa->description)."'
			,'" .utf8_decode($empresa->photo)."'
			,'" .utf8_decode($empresa->lati)."'
			,'" .utf8_decode($empresa->longi)."') ";
	echo'2   ';
	}	
	$res = mysql_query($sql, $con);
}

		echo'ff   ';
	
	

	$i=0;
	if(!$res){
		$jsonarray[$i]['resultat'] = false;
	}else{
		$jsonarray[$i]['resultat'] = true;	
	}
	echo json_encode($jsonarray);
?>
