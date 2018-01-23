import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ContactoFormComponent} from './contacto-form/contacto-form.component';
import {EmpresasService} from '../../core/domain/services/empresasService';
import {CommonModule} from '@angular/common';
import {OrdenarEmpresasPipe} from './ordenar-empresas/ordenar-empresas.pipe';
import {MatInputModule, MatSelectModule, MatIconModule, MatButtonModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";




@NgModule({
  declarations: [
    ContactoFormComponent,
    OrdenarEmpresasPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [EmpresasService],
  exports : [ContactoFormComponent, OrdenarEmpresasPipe]
})
export class SharedModule { }
