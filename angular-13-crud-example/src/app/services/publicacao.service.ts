import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacao } from '../models/publicacao.model';

const baseUrl = 'http://localhost:8080/api/publicacao';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  constructor(private http: HttpClient) { }

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
}
