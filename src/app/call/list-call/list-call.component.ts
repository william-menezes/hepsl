import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { CallService } from './../../shared/services/call.service';
import { Call } from 'src/app/shared/models/call';
import { DialogCallComponent } from './../dialog-call/dialog-call.component';

@Component({
  selector: 'app-list-call',
  templateUrl: './list-call.component.html',
  styleUrls: ['./list-call.component.scss'],
})
export class ListCallComponent implements OnInit {
  //Dados da tabela
  dataSource!: MatTableDataSource<Call>;

  //Colunas da tabela
  displayedColumns = [
    'dateInclusion',
    'dateScheduling',
    'status',
    'department',
    'client',
    'employee',
    'actions',
  ];

  constructor(
    private callService: CallService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCalls();
  }

  //Função que popula a tabela
  getCalls(): void {
    this.callService.getAll().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

  //Abrir caixa de diálogo
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogCallComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getCalls();
    });
  }

  //Navegar para abrir um chamado
  goToAddCall(): void {
    this.route.navigate(['./calls/create']);
  }

  //Filtro de busca na tabela
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
