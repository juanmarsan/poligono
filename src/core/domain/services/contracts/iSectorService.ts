import {Observable} from 'rxjs/Observable';
import {Response} from "@angular/http";

import {Sector} from "../../models/sector";

export interface ISectorService {
  getSectores(): Observable<Sector>;
}
