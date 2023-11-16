import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/service5/autor.service';
import { autor } from 'src/app/modelos/autor'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrarautor',
  templateUrl: './mostrarautor.component.html',
  styleUrls: ['./mostrarautor.component.css']
})
export class MostrarautorComponent implements OnInit {
  
  public autores: autor[] = []
  public displayedColumns: string[] = ["id", " nombre"]
  constructor(
    private autoresService: AutorService,
    private router: Router,
  ) { }
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

}
