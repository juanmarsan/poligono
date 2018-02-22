
import {Poligono} from '../models/poligono';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IPoligonosService} from './contracts/iPoligonosService';
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs";

@Injectable()
export class PoligonosService implements IPoligonosService {
  url: string = 'http://www.web-salva.com/juan/verPoligono.php';
  private poligonos: Poligono[] = [];

  constructor(private http: HttpClient) {
  }

  getPoligonos(): Observable<Poligono[]> {

    if (this.poligonos.length > 0) {
      return of(this.poligonos)
    }

    return this.http.get(this.url).map((response: any) => {
      this.poligonos = <Poligono[]>response;
      return response;
    });
  }

}
