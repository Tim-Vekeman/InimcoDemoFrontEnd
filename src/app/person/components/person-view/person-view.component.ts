// Angular imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// app imports
import { PersonExtended } from '../../../models/personExtended/person-extended';
import { PersonService } from '../../services/person.service';
import { Person } from '../../../models/person/person';

@Component({
  selector: 'app-person-view',
  providers: [PersonService],
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css'],
})
export class PersonViewComponent implements OnInit {
  person: PersonExtended | undefined;

  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (!id) {
      alert('Something went wrong');
      this.router.navigate(['/new']);
      return;
    }

    this.personService.getExtendedPerson(parseInt(id, 10))?.subscribe(
      (person: PersonExtended) => {
        this.person = person;
        
        // prettify the json
        try {
          person.personAsJson = person?.personAsJson as Person;
        } catch (error) {
          alert('There was an error while retrieving the person.');
          this.router.navigate(['/new']);
        }
      },
      (_) => {
        alert('There was an error while retrieving the person.');
        this.router.navigate(['/new']);
      }
    );
  }

  goBack() {
    this.router.navigate(['/new']);
  }
}
