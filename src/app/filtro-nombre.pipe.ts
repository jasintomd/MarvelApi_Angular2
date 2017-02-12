import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNombre'
})
export class FiltroNombrePipe implements PipeTransform {

  transform(value: any, contiene?: any): any {
      
    return value.filter(comic => {
            return comic.title.toUpperCase().includes(contiene.toUpperCase());
        })
  }

}
