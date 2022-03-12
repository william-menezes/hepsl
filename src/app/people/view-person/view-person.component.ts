import { Router, ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PeopleService } from './../../services/people.service';
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

  //Criação do formulário
  formPerson = this.formBuilder.group({
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
      console.log(this.person);
      console.log(this.person.contacts);

      this.person.contacts?.forEach(() => {
        this.addContact();
      });

      this.formPerson.patchValue(this.person);
    });
  }

  //Adiciona um contato no formArray
  addContact() {
    this.contacts().push(this.newContact());
  }

  //Pegar a propriedade contato do formulário
  contacts(): FormArray {
    return this.formPerson.get('contacts') as FormArray;
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
