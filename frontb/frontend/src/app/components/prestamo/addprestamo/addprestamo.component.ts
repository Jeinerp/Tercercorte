import { Component, OnInit } from '@angular/core';
import { PrestamoService } from 'src/app/service1/prestamo.service';
import { Prestamos } from 'src/app/modelos/prestamo';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-addprestamo',
  templateUrl: './addprestamo.component.html',
  styleUrls: ['./addprestamo.component.css']
})
export class AddprestamoComponent implements OnInit {

  public prestamo: Prestamos[] = []
  public displayedColumns: string[] = ["id", "fecha_devolucion ", "fecha_prestamo"]
  constructor(
    private prestamoService: PrestamoService,
    private router: Router,
  ) { }

  userForm=new FormGroup({
    fecha_devolucion:new FormControl('',Validators.required),
    fecha_prestamo: new FormControl('',Validators.required),
      
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.prestamoService.postPrestamo(formdata).subscribe(
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
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
