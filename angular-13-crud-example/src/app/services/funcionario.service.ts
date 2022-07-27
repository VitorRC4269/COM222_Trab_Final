import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Funcionario } from '../models/funcionario.model';

const baseUrl = 'http://localhost:8080/api/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }
/*
  getAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(baseUrl);
  }

  get(id: any): Observable<Funcionario> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCodigo(codigo: any): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${baseUrl}?codigo=${codigo}`);
  }
*/

createFuncionario(data: any): Observable<any> {
  //let url = `${this.baseUri}/funcionarios`;
  return this.http.post(`${baseUrl}`, data)
    .pipe(
      catchError(this.errorHandler)
    )
}

  login(data: any): Observable<any> {
    //let url = `${this.baseUri}/funcionarios/login/`;
    return this.http.post(`${baseUrl}/login`, data).pipe(
      catchError(this.errorHandler)
    )
     
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  
  



}
