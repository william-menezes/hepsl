import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { PeopleService } from 'src/app/shared/services/people.service';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss'],
})
export class PersonDialogComponent implements OnInit {
  person!: Person;

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.peopleService.getById(this.id).subscribe((person) => {
      this.person = person;
    });
  }

  deletePerson(): void {
    this.peopleService.deletePerson(this.id).subscribe(() => {
      this.peopleService.showMessage('Pessoa excluida com sucesso!');

      this.router.navigate(['people/list']);
    });
  }
}
