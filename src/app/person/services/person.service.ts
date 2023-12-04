// import external modules
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import internal modules
import { Person } from '../../models/person/person';
import { PersonExtended } from '../../models/personExtended/person-extended';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = environment.apiUrl + "/persons";
  constructor(private http: HttpClient) { }

  postPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  //extended person
  getExtendedPerson(id: number): Observable<PersonExtended> | undefined {
    return this.http.get<PersonExtended>(this.apiUrl + "/extended/" + id);
  }
}
