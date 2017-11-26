import { NoticiasComponent } from './noticias.component';

export const routes = [
  { path: '', children: [
    { path: '', component: NoticiasComponent }
  ]},
];
