import { Component } from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';

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

  public empresas: any;



  constructor(private empresasService: EmpresasService) {
    this.empresasService.getEmpresas().subscribe(response => {
      this.empresas = response;
    });
  }

  sendForm(values: any) {
      console.log(values);
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
