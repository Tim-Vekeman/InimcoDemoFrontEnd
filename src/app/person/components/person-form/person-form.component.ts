import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent {
  personForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}
  //* Main functions
  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      //TODO: add validation for the social skills array (min 1, max 50) [the validation always says invalid]
      //TODO: also see "addSocialSkill" and html-code
      socialSkills: this.formBuilder.array([], [
        // Validators.required,
        // Validators.minLength(1), 
        // Validators.maxLength(50)
      ]),
      //TODO: add validation for the socialMediaAccounts array (min 1, max 50) [the validation always says invalid]
      //TODO: also see "addSocialSkill" and html-code
      socialMediaAccounts: this.formBuilder.array([], [
        // Validators.required,
        // Validators.minLength(1), 
        // Validators.maxLength(50)
      ])
    });
  }

  onSubmit() {
    console.log(this.personForm.value);
  }

  //* Assistant functions
  // social skill help functions
  get socialSkills() {
    return this.personForm.get('socialSkills') as FormArray;
  }

  addSocialSkill() {
    this.socialSkills.push(this.formBuilder.control('', /*Validators.required*/));
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
        type: ['', /*Validators.required*/],
        address: ['', /*Validators.required*/]
      })
    );
  }

  removeSocialMediaAccount(index: number) {
    this.socialMediaAccounts.removeAt(index);
  }
}
