import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { PeopleService } from './../../shared/services/people.service';
import { Person } from 'src/app/shared/models/person';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss'],
})
export class ListPeopleComponent implements OnInit {
  //Dados da tabela
  dataSource!: MatTableDataSource<Person>;

  //Variável para aplicação dos pipes
  cpfCNPJ!: string;

  //Colunas da tabela
  displayedColumns = ['name', 'cpfCNPJ', 'typePerson', 'actions'];

  constructor(
    private peopleService: PeopleService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPeople();
  }

  //Função que popula a tabela
  getPeople(): void {
    this.peopleService.getAll().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

  //Função que busca pessoas por tipo
  getPeopleByType(type: string): void {
    this.peopleService.getByType(type).subscribe((response) => {
      console.log(response);
    });
  }

  //Navegar para adicionar uma pessoa
  goToAddPerson(): void {
    this.route.navigate(['./people/create']);
  }

  //Abrir caixa de diálogo
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPeople();
    });
  }

  //Filtro de busca na tabela
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
