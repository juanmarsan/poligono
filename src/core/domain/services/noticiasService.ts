
import {Noticia} from "../models/noticia";
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {INoticiasService} from './contracts/iNoticiasService';
import {Observable} from "rxjs";

@Injectable()
export class NoticiasService implements INoticiasService{
  url: string = "http://www.web-salva.com/juan/verNoticia.php";
  urlNoticia: string = 'http://www.web-salva.com/juan/verUnaNoticia.php';

  constructor(private http: HttpClient) {}

  

  getNoticias(){
    return this.http.get(this.url).map(this.extractData);
  }
  getNoticia(i: number){
    return this.http.get(this.urlNoticia+'?id='+i).map(this.extractData);
  }

  private extractData(res: Noticia[]) {
    return res;
  }
}
