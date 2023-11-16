import { Component,OnInit } from '@angular/core';
import { AutorService } from 'src/service5/autor.service';
import { autor } from'src/app/modelos/autor';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addautor',
  templateUrl: './addautor.component.html',
  styleUrls: ['./addautor.component.css']
})
export class AddautorComponent implements OnInit{
  
  public autores: autor[] = []
  public displayedColumns: string[] = ["id", " nombre"]
  constructor(
    private autoresService: AutorService,
    private router: Router,
  ) { }
  userForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
    
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.autoresService.postAutor(formdata).subscribe(
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
  mostrarAutor() {
    this.autoresService.getAllAutor()
      .subscribe((autores: autor[]) => {
        this.autores = autores;
        console.log(this.autores);
      });
  }


  ngOnInit(): void {
    this.mostrarAutor();
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
