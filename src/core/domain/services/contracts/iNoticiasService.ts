import {Noticia} from '../../models/noticia';
import {Observable} from 'rxjs/Observable';
export interface INoticiasService {

  getNoticias(): Observable<Noticia[]>;
  getNoticia(i: number): Noticia;
  extractData(res: Response): any;
}
