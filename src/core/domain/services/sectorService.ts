import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Sector} from '../models/sector';
import {ISectorService} from "./contracts/iSectorService";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";


@Injectable()
export class SectorService implements ISectorService {
  private misSectores: Array<any> =  [];
  url: string = 'http://www.web-salva.com/juan/verSector.php';
  private sectores: Sector[] = [];


  constructor(private http: HttpClient) {}


  getSectores(force?:boolean): Observable<any> {
    if(this.misSectores.length > 0)
      return of(this.misSectores)

    return this.http.get(this.url).map((response: any)=>{
      this.misSectores = response;
      let apiResponse = response;
      return apiResponse;
    });
  }



  private extractData(res: Response) {
    return res;
  }




}
