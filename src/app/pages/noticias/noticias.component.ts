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
  public noticias: any;

  constructor(private noticiasService: NoticiasService) {
    this.noticiasService.getNoticias().subscribe(response => {
      this.noticias = response;
    });

  }






}
