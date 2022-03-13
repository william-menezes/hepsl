import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCNPJ',
})
export class CpfCNPJPipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return null;
    }

    const identification = value.replace(/[^0-9]/g, '');

    if (identification.length === 11) {
      return identification.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/g,
        '$1.$2.$3-$4'
      );
    } else if (identification.length === 14) {
      return identification.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        '$1.$2.$3/$4-$5'
      );
    }

    return value;
  }
}
