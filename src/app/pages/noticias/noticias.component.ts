import { Component } from '@angular/core';
import {Noticia} from "../../../core/domain/models/noticia";
import {NoticiasService} from "../../../core/domain/services/noticiasService";
import {ConfigurationService} from "../../../core/domain/services/configurationService";



@Component({
  selector: 'noticias-directive',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent {
  public title : string = 'Noticias';
  public noticias: any;

  constructor(private noticiasService: NoticiasService,
              private ConfigurationService: ConfigurationService) {
    this.noticiasService.getNoticias().subscribe(response => {
      this.noticias = response;
    });
    console.log(this.ConfigurationService.isPhone)

  }






}
