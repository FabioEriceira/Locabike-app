import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*const baseUrl = 'http://localhost:8080';
const baseUrl = '/home/fabio/Documentos/GitHub/LocaBike/Locabike-app/src/assets/dados/';*/

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    /*return this.http.get(`${baseUrl}/estados.json`);*/
    return this.http.get("./assets/dados/estados.json");
  }
}