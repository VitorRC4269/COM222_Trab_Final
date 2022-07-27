import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Exemplar } from '../models/exemplar.model';

const baseUrl = 'http://localhost:8080/api/exemplar';

@Injectable({
  providedIn: 'root'
})
export class ExemplarService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
/*
  getAll(): Observable<Exemplar[]> {
    return this.http.get<Exemplar[]>(baseUrl);
  }

  get(id: any): Observable<Exemplar> {
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

  findByNumero(numero: any): Observable<Exemplar[]> {
    return this.http.get<Exemplar[]>(`${baseUrl}?numero=${numero}`);
  }

  findByIsbn(isbn: any): Observable<Exemplar[]> {
    return this.http.get<Exemplar[]>(`${baseUrl}/isbn?isbn=${isbn}`);
  }*/


  createExemplar(data: any): Observable<any> {
    //let url = `${baseUrl}/exemplares`;
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  findAllByIsbn(isbn: string): Observable<any> {
    //let url = `${this.baseUri}/exemplares/${isbn}`;
    return this.http.get(`${baseUrl}/isbn/${isbn}`, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }
  
  findExemplaresDisponiveis(isbn: string): Observable<any> {
    //let url = `${this.baseUri}/exemplaresDisponiveis/${isbn}`;
    return this.http.get(`${baseUrl}/disponiveis/${isbn}`, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
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
