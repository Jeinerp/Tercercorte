import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MostrarusuarioComponent } from './components/usuarios/mostrarusuario/mostrarusuario.component';
import { ActualizarusuarioComponent } from './components/usuarios/actualizarusuario/actualizarusuario.component';
import { EliminarusuarioComponent } from './components/usuarios/eliminarusuario/eliminarusuario.component';
import { AddprestamoComponent } from './components/prestamo/addprestamo/addprestamo.component';
import { MostrarprestamoComponent } from './components/prestamo/mostrarprestamo/mostrarprestamo.component';
import { ActualizarprestamoComponent } from './components/prestamo/actualizarprestamo/actualizarprestamo.component';
import { EliminarprestamoComponent } from './components/prestamo/eliminarprestamo/eliminarprestamo.component';
import { AddejemplaresComponent } from './components/ejemplares/addejemplares/addejemplares.component';
import { MostrarejemplaresComponent } from './components/ejemplares/mostrarejemplares/mostrarejemplares.component';
import { ActualizarejemplaresComponent } from './components/ejemplares/actualizarejemplares/actualizarejemplares.component';
import { EliminarejemplaresComponent } from './components/ejemplares/eliminarejemplares/eliminarejemplares.component';
import { AddlibroComponent } from './components/libros/addlibro/addlibro.component';
import { MostrarlibroComponent } from './components/libros/mostrarlibro/mostrarlibro.component';
import { ActualizarlibroComponent } from './components/libros/actualizarlibro/actualizarlibro.component';
import { EliminarlibroComponent } from './components/libros/eliminarlibro/eliminarlibro.component';
import { AddescritorComponent } from './components/escritores/addescritor/addescritor.component';
import { MostrarescritorComponent } from './components/escritores/mostrarescritor/mostrarescritor.component';
import { ActualizarescritorComponent } from './components/escritores/actualizarescritor/actualizarescritor.component';
import { EliminarescritorComponent } from './components/escritores/eliminarescritor/eliminarescritor.component';
import { AddautorComponent } from './components/autor/addautor/addautor.component';
import { MostrarautorComponent } from './components/autor/mostrarautor/mostrarautor.component';
import { ActualizarautorComponent } from './components/autor/actualizarautor/actualizarautor.component';
import { EliminarautorComponent } from './components/autor/eliminarautor/eliminarautor.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';

const routes: Routes = [
  {
    path: 'addusuarios',
    component: UsuarioFormComponent
  },
  {
    path:'mostrarusuarios',
    component: MostrarusuarioComponent
  },
  {
    path: 'actualizarusuarios',
    component: ActualizarusuarioComponent
  },
  {
    path: 'eliminarusuario',
    component: EliminarusuarioComponent
  },
  {
    path: 'addprestamo',
    component: AddprestamoComponent
  },
  {
    path:'mostrarprestamo',
    component: MostrarprestamoComponent
  },
  {
    path: 'actualizarprestamo',
    component: ActualizarprestamoComponent
  },
  {
    path: 'eliminarprestamo',
    component: EliminarprestamoComponent
  },
  {
    path: 'addejemplares',
    component: AddejemplaresComponent
  },
  {
    path:'mostrarejemplares',
    component: MostrarejemplaresComponent
  },
  {
    path: 'actualizarejemplares',
    component: ActualizarejemplaresComponent
  },
  {
    path: 'eliminarejemplares',
    component: EliminarejemplaresComponent
  },
  {
    path: 'addlibro',
    component: AddlibroComponent
  },
  {
    path:'mostrarlibro',
    component: MostrarlibroComponent
  },
  {
    path: 'actualizarlibro',
    component: ActualizarlibroComponent
  },
  {
    path: 'eliminarlibro',
    component: EliminarlibroComponent
  },
  {
    path: 'addescritor',
    component: AddescritorComponent
  },
  {
    path:'mostrarescritor',
    component: MostrarescritorComponent
  },
  {
    path: 'actualizarescritor',
    component: ActualizarescritorComponent
  },
  { 
    path:'eliminarescritor',
    component: EliminarescritorComponent
  },
  {
    path: 'addautor',
    component: AddautorComponent
  },
  {
    path:'mostrarautor',
    component: MostrarautorComponent
  },
  {
    path: 'actualizarautor',
    component: ActualizarautorComponent
  },
  {
    path:'eliminarautor',
    component: EliminarautorComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
