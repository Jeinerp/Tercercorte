import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrarusuario',
  templateUrl: './mostrarusuario.component.html',
  styleUrls: ['./mostrarusuario.component.css']
 

})
export class MostrarusuarioComponent implements OnInit {

  public usuario: Usuarios[] = []
  public displayedColumns: string[] = ["id", " nombre", "apellido","direccion", " telefono"]
  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
    
  ) { }
  mostrarUsuario() {
    this.usuarioService.getAllUsuario()
      .subscribe((usuario: Usuarios[]) => {
        this.usuario = usuario;
        console.log(this.usuario);
      });
  }

  ngOnInit(): void {
    this.mostrarUsuario();
  }
  

}
