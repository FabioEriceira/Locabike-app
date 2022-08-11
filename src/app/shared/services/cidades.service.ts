import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*const baseUrl = 'http://localhost:8080';*/

@Injectable({
  providedIn: 'root'
})

export class CidadesService {

  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    /*return this.http.get(`${baseUrl}/cidades.json`);*/
    return this.http.get("./assets/dados/cidades.json");
  }
}
