
import {Empresa} from '../models/empresa';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IEmpresasService} from './contracts/iEmpresasService';
import {Contacto} from '../models/contacto';

@Injectable()
export class EmpresasService implements IEmpresasService {
  misEmpresas: Array<Empresa> =  [];
  url: string = 'http://www.web-salva.com/juan/verEmpresa.php';
  urlPostContato: string = 'http://www.web-salva.com/juan/sendContacto.php';

  constructor(private http: HttpClient) {}

  getEmpresas() {
    return this.http.get(this.url).map(this.extractData);
  }
  getEmpresa(i: number): Empresa {
    return i >= 0 && this.misEmpresas[i];
  }

  sendContactForm(values: Contacto) {
    console.log(values);
    let body = JSON.stringify(values);
    return this.http.post(this.urlPostContato, body, {}).map(this.extractData);
  }

  private extractData(res: Response) {
    return res;
  }
}
