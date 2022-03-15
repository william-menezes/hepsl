import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from 'src/app/shared/models/person';
import { PeopleService } from 'src/app/shared/services/people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss'],
})
export class EditPersonComponent implements OnInit {
  //Necessário para resetar o formulário sem dar erro de validação
  @ViewChild('form')
  form!: NgForm;

  //Criação do objeto pessoa
  person!: Person;

  //Variável para aplicação dos pipes
  cpfCNPJ!: string;

  //Criação do formulário
  personForm = this.formBuilder.group({
    name: [''],
    typePerson: [''],
    cpfCNPJ: [''],
    contacts: this.formBuilder.array([]),
    employee: this.formBuilder.group({
      password: [''],
      typeEmployee: [''],
    }),
  });

  constructor(
    private peopleService: PeopleService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Constante para armazenar o ID da pessoa obtida através da rota
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.peopleService.getById(id).subscribe((person) => {
      this.person = person;

      this.person.contacts?.forEach(() => {
        this.addContact();
      });

      this.personForm.patchValue(this.person);
    });
  }

  //Adiciona um contato no formArray
  addContact() {
    this.contacts().push(this.newContact());
  }

  //Remove um contato no formArray
  removeContact(contactId: number) {
    this.contacts().removeAt(contactId);
  }

  //Pegar a propriedade contato do formulário
  contacts(): FormArray {
    return this.personForm.get('contacts') as FormArray;
  }

  //Criar um formgroup do tipo contato
  newContact(): FormGroup {
    return this.formBuilder.group({
      typeContact: ['' /* Validators.required */],
      contact: ['' /* Validators.required */],
      nameContact: ['' /* Validators.required */],
    });
  }

  //Função para submeter os dados do formulário
  onSubmit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.person = this.personForm.value;

    this.peopleService.editPerson(id, this.person).subscribe(() => {
      this.peopleService.showMessage('Pessoa editada com sucesso!');

      this.form.resetForm();

      this.router.navigate(['people/list']);
    });
  }

  backToList(): void {
    this.router.navigate(['people/list']);
  }
}
