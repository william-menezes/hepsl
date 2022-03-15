import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Call } from '../models/call';

@Injectable({
  providedIn: 'root',
})
export class CallService {
  private URL = 'http://localhost:3000/call';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  //Retorna todos os chamados cadastrado
  getAll(): Observable<Call[]> {
    return this.http.get<Call[]>(this.URL).pipe(catchError(this.handleError));
  }

  //Retorna um chamado por ID
  getByID(id: string): Observable<Call> {
    return this.http
      .get<Call>(`${this.URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  //Adiciona um chamado
  createCall(call: Call): Observable<Call> {
    return this.http
      .post<Call>(this.URL, call)
      .pipe(catchError(this.handleError));
  }

  //Edita um chamado
  editCall(id: string, call: Call): Observable<Call> {
    return this.http
      .put<Call>(`${this.URL}/${id}`, call)
      .pipe(catchError(this.handleError));
  }

  //Deleta um chamado
  deleteCall(id: string): Observable<Call> {
    return this.http
      .delete<Call>(`${this.URL}/${id}`)
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
