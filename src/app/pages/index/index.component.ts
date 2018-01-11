import { Component } from '@angular/core';
import {Poligono} from "../../../core/domain/models/poligono";
import {PoligonosService} from "../../../core/domain/services/poligonosService";

@Component({
  selector: 'index-directive',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public title : string = 'Inicio';
  public poligonos: any;
  public services : string = 'SERVICIOS QUE ORFRECEMOS';
  public servicesLittle : string = 'A SU DISPOSICIÓN';
  public businessTitle : string = 'ALGUNAS DE LAS EMPRESAS';
  public counter: number = 0;
  public indexContacto : string = 'Puede contactar por cualquiera de los métodos que aparecen en esta página. Si lo desea, también puede hacerlo rellenando el siguiente formulario. Sus datos serán tratados en cumplimiento con lo establecido en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal.';
  public lugar : string = 'Ayuntamiento. Plaza Palacio 1';
  public poblacion : string = '46812 - Aielo de Malferit';
  public telefono : string = '666 999 111';
  public mail : string = 'msil@mail.mail';
  public horario : string = ' L -V de 10:00 a 12:00';


  constructor(private poligonosService: PoligonosService) {
    this.poligonosService.getPoligonos().subscribe(response => {
      this.poligonos = response;
    });
  }

  addNumber() {
    this.counter++;
  }


}

