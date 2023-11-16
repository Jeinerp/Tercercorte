import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';
import { MostrarusuarioComponent } from './components/usuarios/mostrarusuario/mostrarusuario.component';
import { ActualizarusuarioComponent } from './components/usuarios/actualizarusuario/actualizarusuario.component';
import { EliminarusuarioComponent } from './components/usuarios/eliminarusuario/eliminarusuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {UsuarioFormComponent} from './components/usuarios/usuario-form/usuario-form.component'
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    MostrarusuarioComponent,
    ActualizarusuarioComponent,
    EliminarusuarioComponent,
    AddprestamoComponent,
    MostrarprestamoComponent,
    ActualizarprestamoComponent,
    EliminarprestamoComponent,
    AddejemplaresComponent,
    MostrarejemplaresComponent,
    ActualizarejemplaresComponent,
    EliminarejemplaresComponent,
    AddlibroComponent,
    MostrarlibroComponent,
    ActualizarlibroComponent,
    EliminarlibroComponent,
    AddescritorComponent,
    MostrarescritorComponent,
    ActualizarescritorComponent,
    EliminarescritorComponent,
    AddautorComponent,
    MostrarautorComponent,
    ActualizarautorComponent,
    EliminarautorComponent,
    UsuarioFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    MenubarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    PaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
