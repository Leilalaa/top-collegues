import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triScore'
})
export class TriScorePipe implements PipeTransform {

  transform(value: Collegue[], args?: any): Collegue[] {
    let v = value.sort((a, b)=> a.score - b.score).reverse()
    return v;
  }

}
