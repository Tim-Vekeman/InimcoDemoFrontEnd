// Angular imports
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// app imports
import { PersonExtended } from '../../../models/personExtended/person-extended';
import { PersonService } from '../../services/person.service';
@Component({
  selector: 'app-person-view',
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
      alert('There was an error while retrieving the person.');
      this.router.navigate(['/new']);
      return;
    }
    this.personService.getExtendedPerson(parseInt(id))?.subscribe(
      (person: PersonExtended) => {
        this.person = person;
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
