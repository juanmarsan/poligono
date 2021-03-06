import {Component} from "@angular/core";
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute} from "@angular/router";
import {Noticia} from '../../../../core/domain/models/noticia';
import {NoticiasService} from "../../../../core/domain/services/noticiasService";


@Component({
  selector: 'noticias-detalle-component',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css']
})
export class NoticiaDetalleComponent{
  public title : string = 'Noticias';
  public noticia: any;
  constructor(private route: ActivatedRoute,
              private noticiasService: NoticiasService){
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.noticiasService.getNoticia(params['id']).subscribe(response => {
        this.noticia = response[0];
        console.log(this.noticia)
      });


    });
  }




}
