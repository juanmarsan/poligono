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
import {SharedModule} from './shared/shared.module';
import {NoticiaDetalleComponent} from "./pages/noticias/noticia-detalle/noticia-detalle.component";
import {NoticiasComponent} from "./pages/noticias/noticias.component";
import {LocationComponent} from "./pages/location/location.component";
import {MapaComponent} from "./pages/mapa/mapa.component";
import {AgmCoreModule} from "@agm/core";
import {PoligonosService} from '../core/domain/services/poligonosService';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NoContentComponent,
    NoticiaDetalleComponent,
    NoticiasComponent,
    LocationComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_n0AE25IaRXb_bqCPopZxXiuVOpTglMk'
    })
  ],
  providers: [NoticiasService, EmpresasService, PoligonosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
