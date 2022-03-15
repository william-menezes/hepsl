import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CpfCNPJPipe } from './pipes/cpf-cnpj.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [CpfCNPJPipe, PhonePipe, OnlyNumbersDirective],
  imports: [CommonModule, MaterialModule],
  exports: [CpfCNPJPipe, PhonePipe, OnlyNumbersDirective],
})
export class SharedModule {}
