import {Empresa} from '../../models/empresa';
import {Observable} from 'rxjs/Observable';
export interface IEmpresasService {

  getEmpresas(): Observable<Response>;
  getEmpresa(i: number): Empresa;
}