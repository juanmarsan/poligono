import {Noticia} from '../../models/noticia';
import {Observable} from 'rxjs/Observable';
export interface INoticiasService {

  getNoticias(): Observable<Response>;
  getNoticia(i: number): Noticia;
}
