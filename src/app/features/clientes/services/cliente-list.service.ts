import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ClienteListService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(`${baseUrl}/clientes`)
  }

  create(clientes:any): Observable<any> {
    console.log(clientes);
    return this.http.post(`${baseUrl}/clientes`,clientes);

 }
}
