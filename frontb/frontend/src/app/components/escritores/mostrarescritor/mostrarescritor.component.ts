import { Component, OnInit } from '@angular/core';
import { EscribirService } from 'src/service4/escribir.service';
import { escribir } from 'src/app/modelos/escribir';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mostrarescritor',
  templateUrl: './mostrarescritor.component.html',
  styleUrls: ['./mostrarescritor.component.css']
})
export class MostrarescritorComponent implements OnInit{
  public escritor: escribir[] = []
  public displayedColumns: string[] = ["id", "dia_mes_ano ", "autor","libro"]
  constructor(
    private escritorService: EscribirService,
    private router: Router,
  ) { }
  mostrarEscritor() {
    this.escritorService.getAllEscribir()
      .subscribe((escritor: escribir[]) => {
        this.escritor = escritor;
        console.log(this.escritor);
      });
  }


  ngOnInit(): void {
    this.mostrarEscritor();
  }

}
