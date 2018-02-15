import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ISectorService} from "./contracts/iSectorService";
import {Response} from "@angular/http";


@Injectable()
export class SectorService implements ISectorService {
  misSectores: Array<any> =  [];
  url: string = 'http://www.web-salva.com/juan/verSector.php';


  constructor(private http: HttpClient) {}

  getSectores() {
    return this.http.get(this.url).map(this.extractData);
  }


  private extractData(res: Response) {
    return res;
  }




}
