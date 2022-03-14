import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { AddCallComponent } from './add-call/add-call.component';
import { EditCallComponent } from './edit-call/edit-call.component';
import { ListCallComponent } from './list-call/list-call.component';

@NgModule({
  declarations: [
    AddCallComponent,
    EditCallComponent,
    ListCallComponent
  ],
  imports: [
    CommonModule,
    CallRoutingModule
  ]
})
export class CallModule { }
