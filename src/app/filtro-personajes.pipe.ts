import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersonajes'
})
export class FiltroPersonajesPipe implements PipeTransform {

  transform(value: any, contiene?: any): any {
      
    return value.filter(personaje => {
            return personaje.name.toUpperCase().includes(contiene.toUpperCase());
        })
  }

}
