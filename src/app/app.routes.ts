import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.commponent';
import { NoContentComponent } from './no-content/no-content.component';
import { NgModule } from '@angular/core';


const ROUTES: Routes = [
  { path: '',      component: ContactoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', loadChildren: 'noticias/noticias.module#NoticiasModule',  data: { preload: false }},
  { path: '**',    component: NoContentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}