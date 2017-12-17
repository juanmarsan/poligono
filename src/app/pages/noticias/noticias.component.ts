import { Component } from '@angular/core';
import {Noticia} from "../../../core/domain/models/noticia";
import {NoticiasService} from "../../../core/domain/services/noticiasService";

     
 
@Component({
  selector: 'noticias-directive',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent {
  public title : string = 'Noticias';
  public noticias: Array<Noticia>;

  constructor(private noticiasService: NoticiasService){
    this.noticias = this.noticiasService.getNoticias();
  }




}
