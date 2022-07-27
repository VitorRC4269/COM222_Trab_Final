import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Emprestimo } from '../models/emprestimo.model';


const baseUrl = 'http://localhost:8080/api/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createEmprestimo(data: any): Observable<any> {
   // let url = `${this.baseUri}/emprestimos`;
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  
  findAtrasados(): Observable<any> {
   // let url = `${this.baseUri}/emprestimosAtrasados`;
    return this.http.get(`${baseUrl}/atrasados`, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  devolverExemplar(data: any): Observable<any> {
    //let url = `${this.baseUri}/devolverExemplar`;
    return this.http.post(`${baseUrl}/devolver`, data)
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
