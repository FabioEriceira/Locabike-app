import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(`${baseUrl}/locacoes`)
  }

  listLocacaoComCliente(): Observable<any>{
    return this.http.get(`${baseUrl}/locacoes/locacaoComCliente`)
  }

  create(locacoes:any): Observable<any> {
    console.log(locacoes);

    return this.http.post(`${baseUrl}/locacoes`,locacoes);

 }
}
