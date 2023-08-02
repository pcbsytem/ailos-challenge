import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfMask]',
})
export class CpfMaskDirective {
  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d)/g, '$1.$2');
    }
    if (value.length > 6) {
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
    }
    if (value.length > 9) {
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4');
    }
    event.target.value = value;
  }
}
