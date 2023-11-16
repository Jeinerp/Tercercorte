import { Component, OnInit } from '@angular/core';
import { EscribirService } from 'src/service4/escribir.service';
import { escribir } from 'src/app/modelos/escribir';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addescritor',
  templateUrl: './addescritor.component.html',
  styleUrls: ['./addescritor.component.css']
})
export class AddescritorComponent implements OnInit{
  public escritor: escribir[] = []
  public displayedColumns: string[] = ["id", "dia_mes_ano ", "autor","libro"]
  constructor(
    private escritorService: EscribirService,
    private router: Router,
  ) { }
  userForm=new FormGroup({
    dia_mes_ano:new FormControl('',Validators.required),
    autor: new FormControl('',Validators.required),
    libro: new FormControl(''),
    
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.escritorService.postEscribir(formdata).subscribe(
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
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
