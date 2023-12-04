// angular imports
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, Form } from '@angular/forms';
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

    //create initial input fields
    this.addSocialSkill();
    this.addSocialMediaAccount();
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
  get socialSkillsArray(): FormControl[] {
    return this.socialSkills.controls.map(control => control as FormControl);
  }

  get socialSkills() {
    return this.personForm.get('socialSkills') as FormArray;
  }

  addSocialSkill() {
    this.socialSkills.push(new FormControl(''));
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
