import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CallService } from './../../shared/services/call.service';
import { FormBuilder, NgForm, FormGroup } from '@angular/forms';
import { Call } from '../../shared/models/call';

@Component({
  selector: 'app-add-call',
  templateUrl: './add-call.component.html',
  styleUrls: ['./add-call.component.scss'],
})
export class AddCallComponent implements OnInit {
  //Necessário para resetar o formulário sem dar erro de validação
  @ViewChild('form')
  form!: NgForm;

  //Criação do objeto chamado
  call!: Call;

  //Criação do formulário
  callForm: FormGroup;

  constructor(
    private callService: CallService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.callForm = this.formBuilder.group({
      dateInclusion: [''],
      dateScheduling: [''],
      department: [''],
      client: [''],
      employee: [''],
      status: [''],
      description: [''],
      historic: [''],
    });
  }

  ngOnInit(): void {}

  //Função para submeter os dados do formulário
  onSubmit(): void {
    this.call = this.callForm.value;

    this.callService.createCall(this.call).subscribe(() => {
      this.callService.showMessage('Chamado registrado com sucesso!');

      this.resetForm();
    });
  }

  //Limpar as informações digitadas no formulário
  resetForm(): void {
    this.form.resetForm();

    this.router.navigate(['/calls/list']);
  }
}
