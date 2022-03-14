import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCallComponent } from './add-call/add-call.component';
import { EditCallComponent } from './edit-call/edit-call.component';
import { ListCallComponent } from './list-call/list-call.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: AddCallComponent },
  { path: 'edit/:id', component: EditCallComponent },
  { path: 'list', component: ListCallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallRoutingModule {}
