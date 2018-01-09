import {Component} from '@angular/core';
import {Empresa} from '../../../core/domain/models/empresa';
import {EmpresasService} from '../../../core/domain/services/empresasService';

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

  constructor(private empresasService: EmpresasService) {
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });
  }

  filterName(event: any) {
    console.log(event);
    this.ordenarTipo = event;
  }
}
