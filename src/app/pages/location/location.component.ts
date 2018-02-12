import {Component} from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {PoligonosService} from '../../../core/domain/services/poligonosService';
import {Poligono} from '../../../core/domain/models/poligono';

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

  constructor(private empresasService: EmpresasService,
              private poligonosService: PoligonosService) {
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });

    this.poligonosService.getPoligonos().subscribe(response => {
      this.poligonos = response;
    });
  }

  filterName(event: any) {
    this.ordenarTipo = event;
  }
}
