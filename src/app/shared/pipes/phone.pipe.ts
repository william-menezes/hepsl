import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return null;
    }

    let phoneFormatted = '';
    
    if (value) {
      const phone = value.replace(/\D/g, '');


      if (phone.length > 12) {
        phoneFormatted = phone.replace(
          /(\d{2})?(\d{2})?(\d{5})?(\d{4})/,
          '+$1 ($2) $3-$4'
        );
      } else if (phone.length > 11) {
        phoneFormatted = phone.replace(
          /(\d{2})?(\d{2})?(\d{4})?(\d{4})/,
          '+$1 ($2) $3-$4'
        );
      } else if (phone.length > 10) {
        phoneFormatted = phone.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
      } else if (phone.length > 9) {
        phoneFormatted = phone.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
      } else if (phone.length > 5) {
        phoneFormatted = phone.replace(
          /^(\d{2})?(\d{4})?(\d{0,4})/,
          '($1) $2-$3'
        );
      } else if (phone.length > 1) {
        phoneFormatted = phone.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (value !== '') {
          phoneFormatted = phone.replace(/^(\d*)/, '($1');
        }
      }

    }
    return phoneFormatted;
  }
}
