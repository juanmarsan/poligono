<?php
header('Access-Control-Allow-Origin: *'); 
$con = mysql_connect("websalvaxzjuan.mysql.db", "websalvaxzjuan", "Juanito123"); 
	mysql_select_db("websalvaxzjuan", $con);

	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body);
	//var_dump($data) ;

foreach ($data as  $empresa) {echo'aqui entra   ';

	if($empresa->id !=""){
		$sql="UPDATE empresa SET
			nombre='".$empresa->title."'
			,id_sector='".$empresa->idsector."'
			,direccion='".$empresa->adress."'
			,id_poligono='" .$empresa->idpoligono."'
			,telefono='" .$empresa->telefono."'
			,movil='" .$empresa->movil."'
			,email='" .$empresa->email."'
			,web='" .$empresa->web."'
			,descripcion='" .$empresa->description."'
			,foto='" .$empresa->photo."'
			,lati='" .$empresa->lati."'
			,longi='" .$empresa->longi."' 

		WHERE id=".$empresa->id;

	}else{
echo'1   ';
		$sql= "INSERT INTO empresa ( nombre, id_sector, direccion, id_poligono, telefono, movil, email, web, descripcion, foto, lati, longi)  VALUES (
			'".$empresa->title."'
			,'" .$empresa->idsector."'
			,'" .$empresa->adress."'
			,'" .$empresa->idpoligono."'
			,'" .$empresa->telefono."'
			,'" .$empresa->movil."'
			,'" .$empresa->email."'
			,'" .$empresa->web."'
			,'" .$empresa->description."'
			,'" .$empresa->photo."'
			,'" .$empresa->lati."'
			,'" .$empresa->longi."') ";
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
