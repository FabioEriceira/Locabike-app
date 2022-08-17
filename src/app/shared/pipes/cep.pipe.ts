import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string): string {
    const ccep = value.split("");
    const cepPipe = `${ccep[0]}${ccep[1]}.${ccep[2]}${ccep[3]}${ccep[4]}-${ccep[5]}${ccep[6]}${ccep[7]}`;
    return cepPipe;
  }
}


