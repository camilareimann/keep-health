import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  validarNomeCompleto(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | any => {

const nomes: Array<string> = control.value.split(' ')
if (nomes.length < 2 || nomes[0].length < 3 || nomes[1].length <3){
  return {validarNomeCompleto:true}
}

      /* logica */
// const value = control.value;
// if(!value){
//   return null;
// }
// const nomes: string[] = value.split(' ');

// const nomeValid = nomes.length < 2 && nomes[0].length < 3 && nomes[1].length <3;

// console.log(control.value)

// return !nomeValid ? {nome: true} : null;

    }
  }
}
