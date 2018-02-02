import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-titulo-categoria',
  templateUrl: './titulo-categoria.component.html',
  styleUrls: ['titulo-categoria.component.scss']
})
export class TituloCategoriaComponent {
@Input('titulo') public titulo: string;
@Input('foto') public foto: string;

  constructor(){
  }

}
