import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import { NgModule } from '@angular/core';
import {NoticiaDetalleComponent} from "./pages/noticias/noticia-detalle/noticia-detalle.component";
import {NoticiasComponent} from "./pages/noticias/noticias.component";
import {LocationComponent} from "./pages/location/location.component";
import {SendDataComponent} from "./pages/sendData/sendData.component"
import {MapaComponent} from "./pages/mapa/mapa.component";
import {IndexComponent} from "./pages/index/index.component";

const ROUTES: Routes = [
  { path: '',       pathMatch: 'full', redirectTo: 'index'},
  { path: 'index', component: IndexComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias',  component: NoticiasComponent},
  { path: 'location',  component: LocationComponent},
  { path: 'sendData',  component: SendDataComponent},
  { path: 'mapa',  component: MapaComponent},
  {path:  'noticia/:id', component: NoticiaDetalleComponent},
  { path: '**',    component: NoContentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
