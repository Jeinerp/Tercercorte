import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: '/usuarios',
        items: [
          {
            label: 'Crear usuarios',
            icon: 'pi pi-user-plus',
            routerLink: '/addusuarios'
          },
          {
            label: 'Mostrar usuarios',
            icon: 'pi pi-users',
            routerLink: '/mostrarusuarios'
          },
          {
            label: 'Actualizar usuarios',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizarusuarios'
          },
          {
            label: 'Eliminar usuarios',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminarusuario'
          },
        
        ]
      },
      {
        label: 'Prestamos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/prestamo',
        items: [
          {
            label: 'añadir prestamo',
            icon: 'pi pi-user-plus',
            routerLink: '/addprestamo',
          },
          {
            label: 'Mostrar prestamo',
            icon: 'pi pi-users',
            routerLink: '/mostrarprestamo',
          },
          {
            label: 'Actualizar prestamo',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizarprestamo',
          },
          {
            label: 'Eliminar prestamo',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminarprestamo',
          }
        ]
      },
      {
        label: 'Ejemplares',
        icon: 'pi pi-fw pi-users',
        routerLink: '/ejemplares',
        items: [

          {
          label: 'Crear ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: '/addejemplares',
          },
          {
          label: 'Mostar ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: '/mostrarejemplares',
          },
          {
          label: 'Actualizar ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: '/actualizarejemplares',
          },
          {
          label: 'Eliminar ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: 'eliminarejemplares',
          }
        ]

      },
      {
        label: 'libros',
        icon: 'pi pi-fw pi-users',
        routerLink: '/libros',
        items: [

          {
            label: 'añadir libro',
            icon: 'pi pi-fw pi-users',
            routerLink: '/addlibro',
          },
          {
            label: 'Mostrar libro',
            icon: 'pi pi-fw pi-users',
            routerLink: '/mostrarlibro',
          },
          {
            label: 'Actualizar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/actualizarlibro',
          },
          {
            label: 'Eliminar libro',
            icon: 'pi pi-fw pi-users',
            routerLink: '/eliminarlibro',
          }

        ]
      },
       {
          label: 'escritor',
          icon: 'pi pi-fw pi-users',
          routerLink: '/escritor',
          items: [
  
            {
              label: 'añadir escritor',
              icon: 'pi pi-fw pi-users',
              routerLink: '/addescritor',
            },
            {
              label: 'Mostrar libro',
              icon: 'pi pi-fw pi-users',
              routerLink: '/mostrarescritor',
            },
            {
              label: 'Actualizar escritor',
              icon: 'pi pi-fw pi-users',
              routerLink: '/actualizarescritor',
            },
            {
              label: 'Eliminar escritor',
              icon: 'pi pi-fw pi-users',
              routerLink: '/eliminarescritor',
            }
  
          ]
        },
          {
            label: 'autor',
            icon: 'pi pi-fw pi-users',
            routerLink: '/autor',
            items: [
    
              {
                label: 'añadir autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/addautor',
              },
              {
                label: 'Mostrar autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/mostrarautor',
              },
              {
                label: 'Actualizar autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/actualizarautor',
              },
              {
                label: 'Eliminar autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/eliminarautor',
              }
    
            ]
      } 
    
    ]
  }
}

