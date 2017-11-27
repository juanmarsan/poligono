import {INoticiasService} from "./contracts/iNoticiasService";
import {Noticia} from "../models/noticia";

export class NoticiasService implements INoticiasService{
  misNoticias: Array<Noticia>;

  constructor(){
    this.misNoticias = [
      {id: 0, title: 'ETA', descripcion: 'este es el anyo del final de ETA'},
      {id: 1, title: 'BARCELONA', descripcion: 'barcelona se independiza...bla bla'},
      {id: 2, title: 'coca beach', descripcion: 'el coca b. ha sido elegidoc opmo....'}
    ]
  }

  getNoticias():Array<Noticia>{
    return this.misNoticias;
  }
  getNoticia(i: number):Noticia{
    return i >=0 && this.misNoticias[i]
  }

}
