import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'OrdenarEmpresasPipe'})
export class OrdenarEmpresasPipe implements PipeTransform {
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
    else if(ordenarPor == 'ordCategoria'){
      values.sort((a: any, b: any) => {
        if (a.sector < b.sector) {
          return -1;
        } else if (a.sector > b.sector) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    else if(ordenarPor == 'ordPoligono'){
      values.sort((a: any, b: any) => {
        if (a.poligono < b.poligono) {
          return -1;
        } else if (a.poligono > b.poligono) {
          return 1;
        } else {
          return 0;
        }
      });
    }
return values;
}
}
