import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libros } from '../modelos/libros';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/libros/`
  constructor(
    private http:HttpClient
  ) { }
  getAllLibros(){
    return this.http
    .get<Libros[]>(this.base_path)
  }
  postLibro(libroData: any): Observable<any>{
    return this.http
    .post( this.base_path,libroData)

  }
}
