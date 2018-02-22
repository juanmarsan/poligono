import {Observable} from "rxjs";
import {Poligono} from "../../models/poligono";
export interface IPoligonosService {

  getPoligonos() : Observable<Poligono[]>;
}
