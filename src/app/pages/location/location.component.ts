import { Component } from '@angular/core';
import {Empresa} from "../../../core/domain/models/empresa";
import {EmpresasService} from "../../../core/domain/services/empresasService";

@Component({
  selector: 'location-directive',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
    public title : string = 'LISTADO DE EMPRESAS';
  public counter: number = 0;

    constructor(private empresasService: EmpresasService) {
      this.empresasService.getEmpresas().subscribe(response => {
        this.empresas = response;
      });
    }

    filterName() {
        this.empresasService.getEmpresasOrdName().subscribe(response => {
        this.empresas = response;
      });
    }

    filterCategory() {

    }
      addNumber() {
    this.counter++;
  }

}