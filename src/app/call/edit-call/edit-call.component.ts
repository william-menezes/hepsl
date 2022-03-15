import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Call } from './../../shared/models/call';
import { CallService } from './../../shared/services/call.service';

@Component({
  selector: 'app-edit-call',
  templateUrl: './edit-call.component.html',
  styleUrls: ['./edit-call.component.scss'],
})
export class EditCallComponent implements OnInit {
  //Necessário para resetar o formulário sem dar erro de validação
  @ViewChild('form')
  form!: NgForm;

  //Criação do objeto chamado
  call!: Call;

  //Criação do formulário
  callForm = this.formBuilder.group({
    dateInclusion: [''],
    dateScheduling: [''],
    department: [''],
    client: [''],
    employee: [''],
    status: [''],
    description: [''],
    historic: [''],
  });

  constructor(
    private callService: CallService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Constante para armazenar o ID do chamado obtido através da rota
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.callService.getByID(id).subscribe((call) => {
      this.call = call;

      this.callForm.setValue(this.call);
    });
  }

  //Função para submeter os dados do formulário
  onSubmit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.call = this.callForm.value;

    this.callService.editCall(id, this.call).subscribe(() => {
      this.callService.showMessage('Chamado cadastrado com sucesso!');

      this.form.resetForm();

      this.router.navigate(['calls/list']);
    });
  }

  backToList(): void {
    this.router.navigate(['calls/list']);
  }
}
