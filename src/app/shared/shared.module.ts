import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

/* import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component'; */
import { CpfCNPJPipe } from './pipes/cpf-cnpj.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';


@NgModule({
  declarations: [
  /*   SidenavComponent,
    HeaderComponent,
    HomeComponent, */
    CpfCNPJPipe,
    PhonePipe,
    OnlyNumbersDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
  /*   SidenavComponent,
    HeaderComponent,
    HomeComponent, */
    CpfCNPJPipe,
    PhonePipe,
    OnlyNumbersDirective
  ]
})
export class SharedModule { }
