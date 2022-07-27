import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Publicacao } from '../models/publicacao.model';

const baseUrl = 'http://localhost:8080/api/publicacao';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
/*
  getAll(): Observable<Publicacao[]> {
    return this.http.get<Publicacao[]>(baseUrl);
  }

  get(id: any): Observable<Publicacao> {
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

  findByIsbn(isbn: any): Observable<Publicacao[]> {
    return this.http.get<Publicacao[]>(`${baseUrl}?isbn=${isbn}`);
  }

  */



  createPublicacao(data: any): Observable<any> {
    
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  findAllPublicacoes(): Observable<any> {
   
    return this.http.get(baseUrl, {headers: this.headers}).pipe(
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
