import { Component, OnInit } from '@angular/core';
import { EjemplaresService } from 'src/service3/ejemplares.service';
import { ejemplares } from 'src/app/modelos/ejemplares';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrarejemplares',
  templateUrl: './mostrarejemplares.component.html',
  styleUrls: ['./mostrarejemplares.component.css']
})
export class MostrarejemplaresComponent implements OnInit {
  public ejemplare: ejemplares[] = []
  public displayedColumns: string[] = ["id", " libro", "localizacion"]
  constructor(
    private ejemplareService: EjemplaresService,
    private router: Router,
  ) { }
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

}
