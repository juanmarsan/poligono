import { Component } from '@angular/core';
import {EmpresasService} from '../../../core/domain/services/empresasService';
import {Contacto} from "../../../core/domain/models/contacto";
import {Empresa} from "../../../core/domain/models/empresa";
import {PoligonosService} from "../../../core/domain/services/poligonosService";

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['contacto-form.component.scss']
})
export class ContactoFormComponent {
  public formularioContacto : string = 'Formulario de Contacto';
  public contactoPeticionEnviado: boolean = false;
  public contacto: Contacto;
  public empresas: any;
  public poligonos: any;

  constructor(private empresasService: EmpresasService,
              private poligonoService: PoligonosService) {
    this.contacto = new Contacto;
    this.contacto.telefono ="333";
    this.empresasService.getEmpresas().subscribe(empresas =>{
      this.empresas = empresas
    });
    this.poligonoService.getPoligonos().subscribe(poligonos =>{
      this.poligonos = poligonos
    });
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
