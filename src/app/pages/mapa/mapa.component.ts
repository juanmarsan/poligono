import {Component} from '@angular/core';
import {Empresa} from '../../../core/domain/models/empresa';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {Marker} from "../../../core/domain/models/marker";

@Component({
  selector: 'mapa-directive',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
zoom : number = 10;
lati : number = 38.8795955;
longi : number = -0.5966299;
public empresas: Empresa[];
public markers : Marker[] ;

  constructor(private empresasService: EmpresasService) {
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });
    this.markers = [
      {
        nombre : 'rocheltex',
        lati :38.8874259,
        longi :-0.5797139,
        arrastrable:false,
      },
    ]
  }


}

