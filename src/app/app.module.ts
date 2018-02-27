import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app.routes';


import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import {NoticiasService} from '../core/domain/services/noticiasService';

import {EmpresasService} from '../core/domain/services/empresasService';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NoticiaDetalleComponent} from "./pages/noticias/noticia-detalle/noticia-detalle.component";
import {NoticiasComponent} from "./pages/noticias/noticias.component";
import {LocationComponent} from "./pages/location/location.component";
import {SendDataComponent} from "./pages/sendData/sendData.component";
import {MapaComponent} from "./pages/mapa/mapa.component";
import {AgmCoreModule} from "@agm/core";
import {PoligonosService} from '../core/domain/services/poligonosService';
import {
  MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatSelectModule,
  MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfigurationService} from "../core/domain/services/configurationService";
import {ContactoFormComponent} from "./shared/contacto-form/contacto-form.component";
import {OrdenarEmpresasPipe} from "./shared/ordenar-empresas/ordenar-empresas.pipe";
import {FiltrarEmpresaIdPipe} from "./shared/filtrar/filtrar-empresa-id.pipe";
import {MaterialModule} from "./material.module";
import {TituloCategoriaComponent} from './shared/titulo-categoria/titulo-categoria.component';
import {FiltrarCategoriaPipe} from "./shared/filtrar/filtrar-categoria.pipe";
import {FiltrarPoligonoPipe} from "./shared/filtrar/filtrar-poligono.pipe";
import {IndexComponent} from "./pages/index/index.component";
import {SectorService} from "../core/domain/services/sectorService";
import {FiltrarSectorPipe} from "./shared/filtrar/filtrar-sector.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NoContentComponent,
    NoticiaDetalleComponent,
    NoticiasComponent,
    LocationComponent,
    MapaComponent,
    SendDataComponent,
    ContactoFormComponent,
    FiltrarEmpresaIdPipe,
    OrdenarEmpresasPipe,
    TituloCategoriaComponent,
    FiltrarCategoriaPipe,
    FiltrarPoligonoPipe,
    FiltrarSectorPipe,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_n0AE25IaRXb_bqCPopZxXiuVOpTglMk'
    }),
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [NoticiasService, EmpresasService, PoligonosService, ConfigurationService, SectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
