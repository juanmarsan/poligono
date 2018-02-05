import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'FiltrarEmpresaIdPipe'})
  export class FiltrarEmpresaIdPipe implements PipeTransform {
  transform(values: any[], args: string[]): any {
    if(!values || args.length==0) return values;
    return values;

    return values;
  }
}
