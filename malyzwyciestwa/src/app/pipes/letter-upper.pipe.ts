import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterUpper'
})
export class LetterUpperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let upper = value[0].toUpperCase(),
        rest = value.slice(1, value.length),
        total = upper+rest;
    return total;
  }
//dateNow | date: 'dd/MM/yyyy
}
