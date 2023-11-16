import { Component, OnInit} from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit{

  public usuario: Usuarios[] = []
  public displayedColumns: string[] = ["id", " nombre", "apellido","direccion", " telefono"]
  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
   
  ) { }
  userForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    direccion: new FormControl(''),
    telefono:new FormControl(''),
    
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.usuarioService.postUsuario(formdata).subscribe(
      (response) => {
        console.log('Usuario created successfully:', response);
        this.userForm.reset();
        window.location.reload();
      },
      (error) => {
        console.error('Error creating usuario:', error);
      }
    );

  }

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
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
