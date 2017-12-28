
import {Noticia} from "../models/noticia";
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {INoticiasService} from './contracts/iNoticiasService';

@Injectable()
export class NoticiasService implements INoticiasService{
  misNoticias: Array<Noticia> =  [];
  url: string = "http://127.0.0.1/poligono/verNoticia.php";

  constructor(private http: HttpClient) {}

  getNoticias() {
    return this.http.get(this.url).map(this.extractData);
  }
  getNoticia(i: number): Noticia {
    return i >= 0 && this.misNoticias[i];
  }

  private extractData(res: Response) {
    return res;
  }
}
