import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ContactoFormComponent} from './contacto-form/contacto-form.component';
import {EmpresasService} from '../../core/domain/services/empresasService';
import {CommonModule} from '@angular/common';




@NgModule({
  declarations: [
    ContactoFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers: [EmpresasService],
  exports : [ContactoFormComponent]
})
export class SharedModule { }
