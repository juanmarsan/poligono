
import {Poligono} from '../models/poligono';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IPoligonosService} from './contracts/iPoligonosService';

@Injectable()
export class PoligonosService implements IPoligonosService {
  url: string = 'http://www.web-salva.com/juan/verPoligono.php';

  constructor(private http: HttpClient) {}

  getPoligonos() {
    return this.http.get(this.url).map(this.extractData);
  }

  private extractData(res: Response) {
    return res;
  }
}
