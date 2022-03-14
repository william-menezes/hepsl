import { Component, OnInit } from '@angular/core';
import { Call } from 'src/app/shared/models/call';

@Component({
  selector: 'app-list-call',
  templateUrl: './list-call.component.html',
  styleUrls: ['./list-call.component.scss']
})
export class ListCallComponent implements OnInit {
  call: Call[] = [];

  displayedColumns = ['name', 'cpfCNPJ', 'typePerson', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
