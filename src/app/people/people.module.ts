import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPeopleComponent } from './add-people/add-people.component';
import { MaterialModule } from './../material/material.module';



@NgModule({
  declarations: [
    AddPeopleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AddPeopleComponent
  ]
})
export class PeopleModule { }
