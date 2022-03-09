import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
