
import {Empresa} from '../models/empresa';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IEmpresasService} from './contracts/iEmpresasService';
import {Contacto} from '../models/contacto';
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs";

@Injectable()
export class EmpresasService implements IEmpresasService {
  private misEmpresas: Empresa[] =  [];
  url: string = 'http://www.web-salva.com/juan/verEmpresa.php';
  urlPostContato: string = 'http://www.web-salva.com/juan/sendContacto.php';
  urlfilterName: string = 'http://www.web-salva.com/juan/verEmpresaOrderName.php';


  urlinsert: string = 'http://www.web-salva.com/juan/insertarEmpresa.php';


  constructor(private http: HttpClient) {}

  getEmpresas(force?:boolean): Observable<Empresa[]> {
    if(this.misEmpresas.length > 0 || force)
      return of(this.misEmpresas)

    return this.http.get(this.url).map((response: any)=>{
      this.misEmpresas = response;
      let apiResponse = <Empresa[]>response;
      return apiResponse;
    });
  }


  getEmpresa(i: number): Empresa {
    return i >= 0 && this.misEmpresas[i];
  }

  sendContactForm(values: Contacto) {
    console.log(values);
    let body = JSON.stringify(values);
    return this.http.post(this.urlPostContato, body, {}).map(this.extractData);
  }

  insertEmpresa(values: Empresa[]) {
    console.log(values);
    let body = JSON.stringify(values);
    return this.http.post(this.urlinsert, body, {}).map((response: any)=>{
      this.getEmpresas(true);
      return response;
    });
  }

  private extractData(res: any) {
    return res;
  }




}
