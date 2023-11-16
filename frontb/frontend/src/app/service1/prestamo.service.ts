import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestamos } from '../modelos/prestamo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/usuarios/Prestamo/`
  constructor(
    private http:HttpClient
  ) { }
  getAllPrestamo(){
    return this.http
    .get<Prestamos[]>(this.base_path)
  }
  postPrestamo(prestamoData: any): Observable<any>{
    return this.http
    .post( this.base_path,prestamoData)

  }
}
