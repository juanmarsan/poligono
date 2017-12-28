
import {Empresa} from "../models/empresa";
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IEmpresasService} from './contracts/iEmpresasService';

@Injectable()
export class EmpresasService implements IEmpresasService{
  misEmpresas: Array<Empresa> =  [];
  url: string = "http://127.0.0.1/poligono/verEmpresa.php";

  constructor(private http: HttpClient) {}

  getEmpresas() {
    return this.http.get(this.url).map(this.extractData);
  }
  getEmpresa(i: number): Empresa {
    return i >= 0 && this.misEmpresas[i];
  }

  private extractData(res: Response) {
    return res;
  }
}