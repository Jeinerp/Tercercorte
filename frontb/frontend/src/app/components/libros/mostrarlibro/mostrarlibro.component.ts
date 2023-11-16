import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/service2/libros.service';
import { Libros } from 'src/app/modelos/libros';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrarlibro',
  templateUrl: './mostrarlibro.component.html',
  styleUrls: ['./mostrarlibro.component.css']
})
export class MostrarlibroComponent implements OnInit{
  public libro: Libros [] = []
  public displayedColumns: string[] = ["id", " titulo", "numero_pagina","editorial", "ISBN"]
  constructor(
    private libroService: LibrosService,
    private router: Router,
  ) { }
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

}
