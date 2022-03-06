import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { AddPeopleComponent } from './add-people/add-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';




@NgModule({
  declarations: [
    AddPeopleComponent,
    ListPeopleComponent,
    ViewPersonComponent,
    EditPersonComponent,
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
