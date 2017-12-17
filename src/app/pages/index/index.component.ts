import { Component } from '@angular/core';

@Component({
  selector: 'index-directive',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public title : string = 'Inicio';

 public indexContacto : string = 'Puede contactar por cualquiera de los métodos que aparecen en esta página. Si lo desea, también puede hacerlo rellenando el siguiente formulario. Sus datos serán tratados en cumplimiento con lo establecido en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal.';

  public lugar : string = 'Ayuntamiento. Plaza Palacio 1';
  public poblacion : string = '46812 - Aielo de Malferit';
  public telefono : string = '666 999 111';
  public mail : string = 'msil@mail.mail';
  public horario : string = ' L -V de 10:00 a 12:00';

   
  public counter: number = 0;

  addNumber(){
    this.counter++;
  }
}

