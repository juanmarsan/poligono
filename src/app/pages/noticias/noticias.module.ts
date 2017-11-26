import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { NoticiasComponent } from './noticias.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    NoticiasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class NoticiasModule {
  public static routes = routes;
}
