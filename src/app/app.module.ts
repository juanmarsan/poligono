import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AppRoutingModule }     from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
