// Angular imports
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// app imports
import { PersonExtended } from '../../../models/personExtended/person-extended';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-view',
  providers: [PersonService],
  templateUrl: './person-view.component.html',
  styleUrl: './person-view.component.css',
})
export class PersonViewComponent {
  person: PersonExtended | undefined;

  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id === null) {
      alert('Something went wrong');
      this.router.navigate(['/new']);
      return;
    }
    this.personService.getExtendedPerson(parseInt(id))?.subscribe(
      (person: PersonExtended) => {
        this.person = person;

        // sort the arrays
        this.person.socialSkills.sort((a, b) => a.localeCompare(b));
        this.person.socialMediaAccounts.sort((a, b) => a.type.localeCompare(b.type));

        // prettify the json
        this.person.personAsJson = JSON.parse(JSON.stringify(this.person.personAsJson, null,'\t'));
      },
      (_) => {
        alert('There was an error while retrieving the person.');
        this.router.navigate(['/new']);
        return;
      }
    );
  }

  goBack() {
    this.router.navigate(['/new']);
    return;
  }
}
