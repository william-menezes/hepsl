import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { CallRoutingModule } from './call-routing.module';
import { AddCallComponent } from './add-call/add-call.component';
import { EditCallComponent } from './edit-call/edit-call.component';
import { ListCallComponent } from './list-call/list-call.component';
import { DialogCallComponent } from './dialog-call/dialog-call.component';

@NgModule({
  declarations: [AddCallComponent, EditCallComponent, ListCallComponent, DialogCallComponent],
  imports: [
    CommonModule,
    CallRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CallModule {}
