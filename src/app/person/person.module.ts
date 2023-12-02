// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// component imports
import { PersonFormComponent } from './components/person-form/person-form.component';


@NgModule({
  declarations: [
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
