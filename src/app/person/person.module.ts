// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component imports
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonViewComponent } from './components/person-view/person-view.component';


@NgModule({
  declarations: [
    PersonFormComponent,
    PersonViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PersonModule { }
