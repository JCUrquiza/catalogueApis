import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-rick-morthy',
  templateUrl: './rick-morthy.component.html',
  styleUrls: ['./rick-morthy.component.scss']
})
export class RickMorthyComponent implements OnInit {

  dockItems: MenuItem[] = [];

  mostrarPersonajes: boolean = false;
  mostrarLocaciones: boolean = false;
  mostrarCapitulos: boolean = false;

  constructor(  ) {}

  ngOnInit() {

    // this.rickMorthy.servicioPersonajes();
    // this.rickMorthy.servicioLocaciones();
    // this.rickMorthy.servicioCapitulos();
    
    this.dockItems = [
      {
        label: 'Personajes',
        icon: './assets/images/rickpersonajes.png',
        command: (event) => {  
          this.cambiandoInformacion(event)
        }
        // routerLink: '/pokemon'
        // icon: "https://primefaces.org/cdn/primeng/images/dock/finder.svg"
      },
      {
        label: 'Locaciones',
        icon: './assets/images/rickmorthylocation.png',
        command: (event) => {  
          this.cambiandoInformacion(event)
        }
        // icon: "https://primefaces.org/cdn/primeng/images/dock/appstore.svg"
      },
      {
        label: 'Capítulos',
        icon: './assets/images/rickchapters.jpeg',
        command: (event) => {  
          this.cambiandoInformacion(event)
        }
        // icon: "https://primefaces.org/cdn/primeng/images/dock/trash.png"
      }
    ];

  }
  
  cambiandoInformacion(event: any) {
    console.log('Cambio de pantalla: ', event.item.label);

    switch (event.item.label) {
      case 'Personajes':
        this.mostrarPersonajes = true;
        this.mostrarLocaciones = false;
        this.mostrarCapitulos = false;
        break;
      case 'Locaciones':
        this.mostrarPersonajes = false;
        this.mostrarLocaciones = true;
        this.mostrarCapitulos = false;
        break;
      case 'Capítulos':
        this.mostrarPersonajes = false;
        this.mostrarLocaciones = false;
        this.mostrarCapitulos = true;
        break;

      default:
        break;
    }

    console.log(this.mostrarPersonajes);
    console.log(this.mostrarLocaciones);
    console.log(this.mostrarCapitulos);

  }
}
