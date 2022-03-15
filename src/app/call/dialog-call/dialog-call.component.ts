import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CallService } from './../../shared/services/call.service';
import { Call } from './../../shared/models/call';

@Component({
  selector: 'app-dialog-call',
  templateUrl: './dialog-call.component.html',
  styleUrls: ['./dialog-call.component.scss'],
})
export class DialogCallComponent implements OnInit {
  call!: Call;

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    private callService: CallService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.callService.getByID(this.id).subscribe((call) => {
      this.call = call;
    });
  }

  deleteCall(): void {
    this.callService.deleteCall(this.id).subscribe(() => {
      this.callService.showMessage('Chamado exluído com sucesso!');

      this.router.navigate(['calls/list']);
    });
  }
}
