import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    const ccpf = value.split("");
    const cpfPipe = `${ccpf[0]}${ccpf[1]}${ccpf[2]}.${ccpf[3]}${ccpf[4]}${ccpf[5]}.${ccpf[6]}${ccpf[7]}${ccpf[8]}-${ccpf[9]}${ccpf[10]}`;
    return cpfPipe;
  }
}
