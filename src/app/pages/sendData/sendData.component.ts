import { Component } from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {Empresa} from '../../../core/domain/models/empresa';
import {PoligonosService} from '../../../core/domain/services/poligonosService';
import {SectorService} from '../../../core/domain/services/sectorService';

@Component({
  selector: 'app-sendData-form',
  templateUrl: './sendData.component.html',
  styleUrls: ['./sendData.component.css']
})
export class SendDataComponent {
  public formularioContactos : string = 'Añadir Empresas';
  public contactoPeticionEnviados: boolean = false;
  public counter: number = 0;
  public ordenarTipo: any;
  public poligonos: any;
  public empresas: any;
  public sectores: any;
  public nuevaEmpresa: Empresa = new Empresa();
  public mostrarNuevaEmpresa: boolean = false;



  constructor(private empresasService: EmpresasService,
              private poligonosService: PoligonosService,
              private sectorService: SectorService) {
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });

    this.poligonosService.getPoligonos().subscribe(response => {
      this.poligonos = response;
    });

    this.sectorService.getSectores().subscribe(sectores =>{
      this.sectores = sectores
      console.log(this.sectores);
    });

  }

  sendForm(values: any) {
    console.log(this.empresas[0]);
      this.empresasService.insertEmpresa(this.empresas).subscribe(
        response => {
            console.log('enviado');
            this.contactoPeticionEnviados = true;
        },
        error => {
            console.log('error al enviar');
            this.contactoPeticionEnviados = false;
        }
      )
  }

  addNumber() {
    this.counter++;
    this.filterName("ordId");
  }
  resNumber() {
    this.counter--;
    this.filterName("ordId");
  }
  filterName(event: any) {
    console.log(event);
    this.ordenarTipo = event;
  }

  anadirNuevo() {
    this.empresas.push(this.nuevaEmpresa);

  }



}
