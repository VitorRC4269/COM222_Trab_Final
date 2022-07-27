import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Reserva } from '../models/reserva.model';

const baseUrl = 'http://localhost:8080/api/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
/*
  getAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(baseUrl);
  }

  get(id: any): Observable<Reserva> {
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

  findByIsbn(isbn: any): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${baseUrl}?isbn=${isbn}`);
  }

  */



  createReserva(data: any): Observable<any> {
    
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  findaAllByIsbn(isbn: string): Observable<any> {
   // let url = `${this.baseUri}/reservas/${isbn}`;
    return this.http.get(`${baseUrl}/?isbn=${isbn}`, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  anularReserva(data: any): Observable<any> {
  //  let url = `${this.baseUri}/anularReserva`;
    return this.http.put(`${baseUrl}/anular`, data,  {responseType: 'text'})
      .pipe(
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
