import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'FiltrarSectorPipe'})
export class FiltrarSectorPipe implements PipeTransform {
  transform(items: any[], sectorId: string): any[] {
    if(!items) return [];
    if(!sectorId) return items;
    return items.filter( it => {
      return it.idsector == sectorId;
    });
  }
}
