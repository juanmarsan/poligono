import {Component} from '@angular/core';
import {Empresa} from '../../../core/domain/models/empresa';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {PoligonosService} from "../../../core/domain/services/poligonosService";
import {Poligono} from "../../../core/domain/models/poligono";
import {SectorService} from "../../../core/domain/services/sectorService";


@Component({
  selector: 'mapa-directive',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
zoom : number = 10;
lati : number = 38.8795955;
longi : number = -0.5966299;
public empresas: any;
public title: string = "Mapa";
public filtroEmpresas: string;
public poligonos: any;
public poligonoFilter: string;
public sectores: any;

  constructor(private empresasService: EmpresasService,
              private poligonoService: PoligonosService,
              private sectorService: SectorService) {
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
      this.empresas.map(elemento =>{
        elemento.longi = parseFloat(elemento.longi);
        elemento.lati = parseFloat(elemento.lati);
        return elemento;
      })
      console.log(this.empresas)
    });

    this.poligonoService.getPoligonos().subscribe(poligonos =>{
      this.poligonos = poligonos
      console.log(this.poligonos)
    });

    this.sectorService.getSectores().subscribe(sectores =>{
      this.sectores = sectores
      console.log(this.sectores)
    });



  }


}

