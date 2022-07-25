import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Associado } from '../models/associado.model';

const baseUrl = 'http://localhost:8080/api/associados';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Associado[]> {
    return this.http.get<Associado[]>(baseUrl);
  }

  get(id: any): Observable<Associado> {
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

  findByCodigo(codigo: any): Observable<Associado[]> {
    return this.http.get<Associado[]>(`${baseUrl}?codigo=${codigo}`);
  }
}
