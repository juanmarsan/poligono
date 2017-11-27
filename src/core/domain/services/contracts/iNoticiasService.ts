import {Noticia} from "../../models/noticia";
export interface INoticiasService{

  getNoticias():Array<Noticia>;
  getNoticia(i: number):Noticia;
}
