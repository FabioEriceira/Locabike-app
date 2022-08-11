import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(`${baseUrl}/equipamentos`)
  }

  create(equipamentos:any): Observable<any> {
    console.log(equipamentos);
    return this.http.post(`${baseUrl}/equipamentos`,equipamentos);

 }
}
