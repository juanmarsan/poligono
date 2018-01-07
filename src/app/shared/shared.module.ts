import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ContactoFormComponent} from './contacto-form/contacto-form.component';
import {EmpresasService} from '../../core/domain/services/empresasService';
import {CommonModule} from '@angular/common';
import {OrdenarEmpresasPipe} from './ordenar-empresas/ordenar-empresas.pipe';




@NgModule({
  declarations: [
    ContactoFormComponent,
    OrdenarEmpresasPipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers: [EmpresasService],
  exports : [ContactoFormComponent, OrdenarEmpresasPipe]
})
export class SharedModule { }
