import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatMenuModule, MatIconModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatToolbarModule, MatListModule, MatCardModule, MatDividerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TituloCategoriaComponent} from './shared/titulo-categoria/titulo-categoria.component';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatIconModule,
    MatInputModule, MatSelectModule, MatFormFieldModule, MatToolbarModule,
    MatListModule, MatCardModule, MatDividerModule],
  exports: [MatButtonModule, MatMenuModule, MatIconModule,
  MatInputModule, MatSelectModule, MatFormFieldModule,
    MatToolbarModule, MatListModule, MatCardModule, MatDividerModule],
})
export class MaterialModule { }
