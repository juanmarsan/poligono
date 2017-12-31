import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { IndexComponent } from './index.component';
import {FormsModule} from '@angular/forms';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
})
export class IndexModule {
  public static routes = routes;
}
