import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private URL = 'http://localhost:3000/people'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.URL);
  }
}
