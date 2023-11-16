import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../modelos/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/usuarios/usuario/`
  constructor(
    private http:HttpClient
  ) { }
  getAllUsuario(){
    return this.http
    .get<Usuarios[]>(this.base_path)
  }
  postUsuario(usuarioData: any): Observable<any>{
    return this.http
    .post( this.base_path,usuarioData)

  }


}
