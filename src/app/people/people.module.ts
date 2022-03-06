import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { AddPeopleComponent } from './add-people/add-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';




@NgModule({
  declarations: [
    AddPeopleComponent,
    ListPeopleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    AddPeopleComponent,
    ListPeopleComponent
  ]
})
export class PeopleModule { }
