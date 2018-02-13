import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'FiltrarPoligonoPipe'})
export class FiltrarPoligonoPipe implements PipeTransform {
  transform(items: any[], poligonoId: string): any[] {
    if(!items) return [];
    if(!poligonoId) return items;
    return items.filter( it => {
      return it.idpoligono == poligonoId;
    });
  }
}
