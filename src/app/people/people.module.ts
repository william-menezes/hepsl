import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { PeopleRoutingModule } from './people-routing.module';
import { AddPeopleComponent } from './add-people/add-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';

@NgModule({
  declarations: [
    AddPeopleComponent,
    ListPeopleComponent,
    ViewPersonComponent,
    EditPersonComponent,
    PersonDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PeopleRoutingModule,
    SharedModule,
  ],
  exports: [
    AddPeopleComponent,
    ListPeopleComponent,
    ViewPersonComponent,
    EditPersonComponent,
    PersonDialogComponent
  ]
})
export class PeopleModule { }
