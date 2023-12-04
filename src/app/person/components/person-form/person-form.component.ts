// angular imports
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// app imports
import { Person } from '../../../models/person/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
})
export class PersonFormComponent {
  personForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private router: Router
  ) {}
  //* Main functions
  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      socialSkills: this.formBuilder.array(
        [],
        [Validators.required, Validators.minLength(1), Validators.maxLength(50)]
      ),
      socialMediaAccounts: this.formBuilder.array(
        [],
        [Validators.required, Validators.minLength(1), Validators.maxLength(50)]
      ),
    });
  }
  

  onSubmit() {
    if (this.personForm.valid) {
      const person: Person = this.personForm.value;
      this.personService.postPerson(person).subscribe(
        (person: Person) => {
          this.router.navigate(['/view/' + person.id]);
        },
        (_) => {
          alert('There was an error while saving the person.');
        }
      );
    }
  }

  //* Assistant functions
  // social skill help functions
  get socialSkills() {
    return this.personForm.get('socialSkills') as FormArray;
  }

  addSocialSkill() {
    this.socialSkills.push(
      this.formBuilder.group({
        skill: ['', Validators.required],
      })
    );
  }
  

  removeSocialSkill(index: number) {
    this.socialSkills.removeAt(index);
  }

  // social media account help functions
  get socialMediaAccounts() {
    return this.personForm.get('socialMediaAccounts') as FormArray;
  }

  addSocialMediaAccount() {
    this.socialMediaAccounts.push(
      this.formBuilder.group({
        type: ['', Validators.required],
        address: ['', Validators.required],
      })
    );
  }

  removeSocialMediaAccount(index: number) {
    this.socialMediaAccounts.removeAt(index);
  }
}
