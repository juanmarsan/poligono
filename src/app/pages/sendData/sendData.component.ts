import { Component } from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {Empresa} from '../../../core/domain/models/empresa';
import {PoligonosService} from '../../../core/domain/services/poligonosService';

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
public listaCli: Empresa[];


  constructor(private empresasService: EmpresasService,
              private poligonosService: PoligonosService) {
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });

    this.poligonosService.getPoligonos().subscribe(response => {
      this.poligonos = response;
    });

  }

  sendForm(values: any) {
      console.log(values);
    console.log(this.empresas[0]);
      this.empresasService.insertEmpresa(values).subscribe(
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



}
