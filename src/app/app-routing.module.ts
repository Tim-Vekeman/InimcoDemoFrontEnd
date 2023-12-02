import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormComponent } from './person/components/person-form/person-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/new', pathMatch: 'full'},
  {path: 'new', component: PersonFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
