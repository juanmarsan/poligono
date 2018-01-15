import { Component } from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';

@Component({
  selector: 'app-sendData-form',
  templateUrl: './sendData.component.html',
  styleUrls: ['./sendData.component.css']
})
export class SendDataComponent {
  public formularioContactos : string = 'FORMULARIO DE CONTACTO';
  public contactoPeticionEnviados: boolean = false;



  constructor(private empresasService: EmpresasService) {}

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
}
