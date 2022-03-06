import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPeopleComponent } from './people/list-people/list-people.component';
import { AddPeopleComponent } from './people/add-people/add-people.component';
import { EditPersonComponent } from './people/edit-person/edit-person.component';
import { ViewPersonComponent } from './people/view-person/view-person.component';

const routes: Routes = [
  { path: 'list-people', component: ListPeopleComponent },
  { path: 'add-person', component: AddPeopleComponent },
  { path: 'edit-person', component: EditPersonComponent },
  { path: 'view-person', component: ViewPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
