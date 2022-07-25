import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprestimo } from '../models/emprestimo.model';

const baseUrl = 'http://localhost:8080/api/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(baseUrl);
  }

  get(id: any): Observable<Emprestimo> {
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

  findByCodigo_assoc(codigo_assoc: any): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(`${baseUrl}?codigo_assoc=${codigo_assoc}`);
  }
}
