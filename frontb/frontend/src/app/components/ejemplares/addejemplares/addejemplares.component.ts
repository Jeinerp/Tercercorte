import { Component, OnInit } from '@angular/core';
import { EjemplaresService } from 'src/service3/ejemplares.service';
import { ejemplares } from 'src/app/modelos/ejemplares';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addejemplares',
  templateUrl: './addejemplares.component.html',
  styleUrls: ['./addejemplares.component.css']
})
export class AddejemplaresComponent implements OnInit{

  public ejemplare: ejemplares[] = []
  public displayedColumns: string[] = ["id", " libro", "localizacion"]
  constructor(
    private ejemplareService: EjemplaresService,
    private router: Router,
  ) { }

  userForm=new FormGroup({
    libro:new FormControl('',Validators.required),
    localizacion: new FormControl('',Validators.required),
    
    
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.ejemplareService.postEjemplare(formdata).subscribe(
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

  mostrarEjemplares() {
    this.ejemplareService.getAllEjemplares()
      .subscribe((ejemplare: ejemplares[]) => {
        this.ejemplare = ejemplare;
        console.log(this.ejemplare);
      });
  }

  ngOnInit(): void {
    this.mostrarEjemplares();
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
