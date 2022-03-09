import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPeopleComponent } from './add-people/add-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ViewPersonComponent } from './view-person/view-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: AddPeopleComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'list', component: ListPeopleComponent },
  { path: 'view/:id', component: ViewPersonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
