import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  items: MenuItem[] = [];

  ngOnInit() {

    this.items = [
      {
          label: 'File',
          items: [{
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'Project'},
              {label: 'Other'},
            ]
          },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Catalogue',
        icon: 'pi pi-fw pi-book',
        items: [
          {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home'},
          {label: 'Pokemon', icon: 'pi pi-fw pi-circle', routerLink: 'pokemon'},
          {label: 'Rick & Morthy', icon: 'pi pi-fw pi-user', routerLink: 'rickMorthy'},

          {label: 'Star Wars', icon: 'pi pi-fw pi-star', routerLink: 'starWars'},
          {label: 'Dogs', icon: 'pi pi-fw pi-thumbs-up', routerLink: 'dogs'},
          // Dog-ceo/dog-api
          {label: 'Books', icon: 'pi pi-fw pi-book', routerLink: 'books'},
          // developers.google.com/books
          {label: 'Dragon Ball', icon: 'pi pi-fw pi-user', routerLink: 'dragonBall'},
          // dragon-ball-api.herokuapp.com
          {label: 'Nasa', icon: 'pi pi-fw pi-sun', routerLink: 'nasa'},
          // api.nasa.gob
        ]
      }
    ];

  }
}
