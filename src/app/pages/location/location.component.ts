import {Component} from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {PoligonosService} from '../../../core/domain/services/poligonosService';
import {SectorService} from '../../../core/domain/services/sectorService';
import {Poligono} from '../../../core/domain/models/poligono';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'location-directive',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  public title: string = 'LISTADO DE EMPRESAS';
  public counter: number = 0;
  public empresas: any;
  public ordenarTipo: any;
  public poligonos: any;
  public poligonoFilter: string;
  public filtroEmpresasNombre: string;
  public sectores: any;
  public sectoresFilter: string;
  constructor(private empresasService: EmpresasService,
              private poligonosService: PoligonosService,
              private sectorService: SectorService,
              private route: ActivatedRoute) {


    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });

    this.poligonosService.getPoligonos().subscribe(response => {
      this.poligonos = response;
    });

    this.sectorService.getSectores().subscribe(response => {
      this.sectores = response;
      console.log( this.sectores)
    });

    this.route.queryParams
      .subscribe(params => {
        if(+params['poligono'])
          this.poligonoFilter =  String(+params['poligono']);
      });

      this.route.queryParams
      .subscribe(params => {
        if(+params['sector'])
          this.sectoresFilter =  String(+params['sector']);
      });
  }


  filterName(event: any) {
    this.ordenarTipo = event;
  }


}
