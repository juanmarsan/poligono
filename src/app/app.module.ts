import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
