import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app.routes';

import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IndexComponent } from './pages/index/index.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import {NoticiasService} from "../core/domain/services/noticiasService";


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    IndexComponent,
    NoContentComponent
  ],
  providers: [NoticiasService],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
