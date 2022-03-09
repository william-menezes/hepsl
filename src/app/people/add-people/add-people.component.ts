import { Router } from '@angular/router';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, Validators, NgForm } from '@angular/forms';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss'],
})
export class AddPeopleComponent implements OnInit {
  //Necessário para resetar o formulário sem dar erro de validação
  @ViewChild('form')
  form!: NgForm;

  //Criação do objeto pessoa
  person: Person = {
    typePerson: '',
    name: '',
    cpfCNPJ: '',
  };

  //Criação do formulário
  formPerson = this.formBuilder.group({
    name: ['', [Validators.required]],
    typePerson: ['', [Validators.required]],
    cpfCNPJ: ['', [Validators.required]],
    contacts: this.formBuilder.array([]),
    employee: this.formBuilder.group({
      password: [''],
      typeEmployee: [''],
    }),
  });
  contacts = this.formPerson.get('contacts') as FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  //Função para submeter os dados do formulário
  onSubmit() {
    this.person = this.formPerson.value;

    this.peopleService.createPerson(this.person).subscribe(() => {
      this.peopleService.showMessage('Pessoa cadastrada com sucesso!');

      this.form.resetForm();
    });
  }

  //Limpar as informações digitadas no formulário
  resetForm() {
    this.form.resetForm();

    this.router.navigate(['/people/list'])
  }

  //Função para adionar novo contato
  addContact() {
    this.contacts.push(
      this.formBuilder.group({
        typeContact: ['', Validators.required],
        contact: ['', Validators.required],
        nameContact: ['', Validators.required],
      })
    );
  }
}
