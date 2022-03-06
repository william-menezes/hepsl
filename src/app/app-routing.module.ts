import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPeopleComponent } from './people/add-people/add-people.component';
import { ListPeopleComponent } from './people/list-people/list-people.component';

const routes: Routes = [
  { path: 'add-person', component: AddPeopleComponent },
  { path: 'list-people', component: ListPeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
