// angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component imports
import { PersonFormComponent } from './person/components/person-form/person-form.component';
import { PersonViewComponent } from './person/components/person-view/person-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/new', pathMatch: 'full'},
  {path: 'new', component: PersonFormComponent},
  {path: 'view/:id', component: PersonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
