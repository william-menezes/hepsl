import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../services/people.service';

import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss'],
})
export class ListPeopleComponent implements OnInit {
  people: Person[] = [];

  displayedColumns = ['name', 'cpfCNPJ', 'typePerson', 'actions'];

  constructor(private peopleService: PeopleService, private route: Router) {}

  ngOnInit(): void {
    this.getPeople();
  }

  //Funções de navegação
  goToAddPerson(): void {
    this.route.navigate(['./people/create']);
  }

  //Funções de requisições Http
  getPeople(): void {
    this.peopleService.getAll().subscribe((response) => {
      this.people = response;
    });
  }
}
