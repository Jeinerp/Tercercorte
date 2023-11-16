import { Component, OnInit} from '@angular/core';
import { PrestamoService } from 'src/app/service1/prestamo.service';
import { Prestamos } from'src/app/modelos/prestamo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrarprestamo',
  templateUrl: './mostrarprestamo.component.html',
  styleUrls: ['./mostrarprestamo.component.css']
})
export class MostrarprestamoComponent implements OnInit {

  public prestamo: Prestamos[] = []
  public displayedColumns: string[] = ["id", "fecha_devolucion ", "fecha_prestamo"]
  constructor(
    private prestamoService: PrestamoService,
    private router: Router,
  ) { }
  mostrarPrestamo() {
    this.prestamoService.getAllPrestamo()
      .subscribe((prestamo: Prestamos[]) => {
        this.prestamo = prestamo;
        console.log(this.prestamo);
      });
  }

  ngOnInit(): void {
    this.mostrarPrestamo();
  }

}
