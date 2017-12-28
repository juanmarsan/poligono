import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import { NgModule } from '@angular/core';
import {IndexComponent} from "./pages/index/index.component";


const ROUTES: Routes = [
  { path: '',      component: ContactoComponent },
  { path: 'index', loadChildren: './pages/index/index.module#IndexModule',  data: { preload: false }},
   { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasModule',  data: { preload: false }},
  { path: '**',    component: NoContentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
