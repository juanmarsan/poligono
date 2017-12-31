import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import {NoticiasService} from '../core/domain/services/noticiasService';

import {EmpresasService} from '../core/domain/services/empresasService';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NoticiasService,EmpresasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
