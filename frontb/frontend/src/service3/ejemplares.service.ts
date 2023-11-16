import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ejemplares } from 'src/app/modelos/ejemplares';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EjemplaresService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/ejemplares`
  constructor(
    private http:HttpClient
  ) { }
  getAllEjemplares(){
    return this.http
    .get<ejemplares[]>(this.base_path)
  }
  postEjemplare(ejemplareData: any): Observable<any>{
    return this.http
    .post( this.base_path,ejemplareData)

  }

}
