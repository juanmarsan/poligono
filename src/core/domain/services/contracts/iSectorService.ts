import {Observable} from 'rxjs/Observable';
import {Response} from "@angular/http";

export interface ISectorService {
  getSectores(): Observable<any>;
}
