import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from './../../shared/services/people.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  NgForm,
} from '@angular/forms';
import { Person } from '../../shared/models/person';

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

  //Variável para aplicação dos pipes
  cpfCNPJ!: string;

  //Criação do Formulário
  personForm: FormGroup;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.personForm = this.formBuilder.group({
      name: ['' /* [Validators.required] */],
      typePerson: ['' /* [Validators.required] */],
      cpfCNPJ: ['' /* [Validators.required] */],
      contacts: this.formBuilder.array([]),
      employee: this.formBuilder.group({
        password: [''],
        typeEmployee: [''],
      }),
    });
  }

  ngOnInit(): void {}

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

  //Adiciona um contato no formArray
  addContact() {
    this.contacts().push(this.newContact());
  }

  //Remove um contato no formArray
  removeContact(contactId: number) {
    this.contacts().removeAt(contactId);
  }

  //Função para submeter os dados do formulário
  onSubmit(): void {
    this.person = this.personForm.value;

    this.peopleService.createPerson(this.person).subscribe(() => {
      this.peopleService.showMessage('Pessoa cadastrada com sucesso!');

      this.resetForm();
    });
  }

  //Limpar as informações digitadas no formulário
  resetForm(): void {
    this.form.resetForm();

    this.router.navigate(['/people/list']);
  }
}
