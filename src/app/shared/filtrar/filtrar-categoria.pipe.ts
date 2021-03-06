import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filtroCategoria'})
export class FiltrarCategoriaPipe implements PipeTransform {
  transform(values: any[], ordenarPor: string): any {
    if(ordenarPor == 'ordNombre'){
      values.sort((a: any, b: any) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log(values)
    }
    return values;
  }
}
