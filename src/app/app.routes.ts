import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import { NgModule } from '@angular/core';


const ROUTES: Routes = [
  { path: '',      component: ContactoComponent },
  { path: 'index', component: IndexComponent },
   { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasModule',  data: { preload: false }},
  { path: '**',    component: NoContentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
