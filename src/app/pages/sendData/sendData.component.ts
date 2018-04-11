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
  public formularioContactos : string = 'Añadir y Modificar Empresas';
  public contactoPeticionEnviados: boolean = false;
  public counter: number = 0;
  public ordenarTipo: any;
  public poligonos: any;
  public empresas: Empresa[];
  public sectores: any;
  public nuevaEmpresa: Empresa = new Empresa();
  public mostrarNuevaEmpresa: boolean = false;



  constructor(private empresasService: EmpresasService,
              private poligonosService: PoligonosService,
              private sectorService: SectorService) {

    this.getAllEmpresas()

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
    if(this.mostrarNuevaEmpresa && this.nuevaEmpresa.title ){
      this.empresas.push(this.nuevaEmpresa)
    }
      this.empresasService.insertEmpresa(this.empresas).subscribe(
        response => {
            console.log('enviado');
            this.contactoPeticionEnviados = true;
            this.getAllEmpresas();
            this.mostrarNuevaEmpresa = false;
            this.nuevaEmpresa = new Empresa();
        },
        error => {
            console.log('error al enviar');
            this.contactoPeticionEnviados = false;
          this.mostrarNuevaEmpresa = false;
          this.nuevaEmpresa = new Empresa();
        }
      )
  }


  anadirNuevo() {
    this.empresas.push(this.nuevaEmpresa);
  }

  getAllEmpresas(){
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });
  }



}
