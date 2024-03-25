import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorAltura',
  standalone: true
})
export class ConversorAlturaPipe implements PipeTransform {

  transform(value: number): string {
    let alturaEmM = value/100;
    return alturaEmM + "m";
  }
}
