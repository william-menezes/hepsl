import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private URL = 'http://localhost:3000/people';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  //Retorna todas as pessoas cadastradas
  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.URL).pipe(catchError(this.handleError));
  }

  //Retorna uma pessoa por ID
  getById(id: string): Observable<Person> {
    return this.http
      .get<Person>(`${this.URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  //Adiciona uma pessoa
  createPerson(person: Person): Observable<Person> {
    return this.http
      .post<Person>(this.URL, person)
      .pipe(catchError(this.handleError));
  }

  //Manipulação de erros
  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);
  }

  //Exibição de mensagens
  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
