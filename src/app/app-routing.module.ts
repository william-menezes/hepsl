import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'calls',
    loadChildren: () => import('./call/call.module').then((m) => m.CallModule),
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
