import { Component } from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {Contacto} from "../../../core/domain/models/contacto";

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent {
  public formularioContacto : string = 'FORMULARIO DE CONTACTO';
  public contactoPeticionEnviado: boolean = false;
  public contacto: Contacto;

  constructor(private empresasService: EmpresasService) {
    this.contacto = new Contacto;
  }

  sendForm(values: any) {
    console.log(values);

    this.empresasService.insertEmpresa(values).subscribe(
      response => {
        console.log('enviado');
        this.contactoPeticionEnviado = true;
      },
      error => {
        console.log('error al enviar');
        this.contactoPeticionEnviado = false;
      }
    )
  }
}
