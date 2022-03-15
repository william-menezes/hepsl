import { Router, ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/models/person';
import { PeopleService } from './../../shared/services/people.service';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormArray,
  Validators,
  NgForm,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss'],
})
export class ViewPersonComponent implements OnInit {
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
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

  //Métodos de navegação
  editPerson():void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.router.navigate([`/edit/${id}`]);
  }

  backToList():void {
    this.router.navigate(['/list']);
  }
}
