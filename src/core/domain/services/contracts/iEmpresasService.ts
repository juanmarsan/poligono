import {Empresa} from '../../models/empresa';
import {Observable} from 'rxjs/Observable';
export interface IEmpresasService {

  getEmpresas(): Observable<Empresa[]>;
  getEmpresa(i: number): Empresa;
}
