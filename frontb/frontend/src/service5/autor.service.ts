import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { autor } from 'src/app/modelos/autor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/autores/autor/`
  constructor(
    private http:HttpClient
  ) { }
  getAllAutor(){
    return this.http
    .get<autor[]>(this.base_path)
  }
  postAutor(autorData: any): Observable<any>{
    return this.http
    .post( this.base_path,autorData)

  }
}
