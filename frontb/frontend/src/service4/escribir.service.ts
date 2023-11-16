import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { escribir } from 'src/app/modelos/escribir';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscribirService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/autores/escribir/`
  constructor(
    private http:HttpClient
  ) { }
  getAllEscribir(){
    return this.http
    .get<escribir[]>(this.base_path)
  }
  postEscribir(escribirData: any): Observable<any>{
    return this.http
    .post( this.base_path,escribirData)

  }
}
