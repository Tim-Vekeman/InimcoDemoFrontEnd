// import external modules
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import internal modules
import { Person } from '../models/person.model';
import { ExtendedPerson } from '../models/extended-person.model';

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
  getExtendedPerson(id: number): Observable<ExtendedPerson> {
    return this.http.get<ExtendedPerson>(this.apiUrl + "/persons/extended" + id);
  }
}
