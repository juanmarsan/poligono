import { IndexComponent } from './index.component';

export const routes = [
  { path: '', children: [
    { path: '', component: IndexComponent }
  ]},
];
