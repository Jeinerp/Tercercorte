import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/service2/libros.service';
import { Libros } from 'src/app/modelos/libros';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrls: ['./addlibro.component.css']
})
export class AddlibroComponent implements OnInit {
  public libro: Libros [] = []
  public displayedColumns: string[] = ["id", " titulo", "numero_pagina","editorial", "ISBN"]
  constructor(
    private libroService: LibrosService,
    private router: Router,
  ) { }


  userForm=new FormGroup({
    titulo:new FormControl('',Validators.required),
    numero_pagina: new FormControl('',Validators.required),
    editorial: new FormControl(''),
    ISBN:new FormControl(''),
    
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.libroService.postLibro(formdata).subscribe(
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


  mostrarLibro() {
    this.libroService.getAllLibros()
      .subscribe((libro: Libros[]) => {
        this.libro = libro;
        console.log(this.libro);
      });
  }

  ngOnInit(): void {
    this.mostrarLibro();
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
