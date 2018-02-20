import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue'

@Pipe({
  name: 'cherchePseudo'
})
export class CherchePseudoPipe implements PipeTransform {

  transform(value: Collegue[], args: string): Collegue[] {

    if(args != ""){
      return value.filter(c => c.nom.toUpperCase().startsWith(args.toUpperCase()));
    }
    return value;


  }
}
