import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleService } from './../../services/people.service';

import { Person } from 'src/app/models/person';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss'],
})
export class ListPeopleComponent implements OnInit {
  people: Person[] = [];

  displayedColumns = ['name', 'cpfCNPJ', 'typePerson', 'actions'];

  constructor(
    private peopleService: PeopleService,
    private route: Router,
    public dialog: MatDialog
    ) {}

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

  //Abrir caixa de diálogo
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      width: '300px',
      height: '200px',
      data: id
    });

    dialogRef.afterClosed().subscribe( () => {
      this.getPeople();
    })
  }
}
