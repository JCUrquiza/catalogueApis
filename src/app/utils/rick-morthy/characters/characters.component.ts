import { Component } from '@angular/core';
import { Characters, RickMorthyResponse } from 'src/app/core/interfaces/rickMorthy/rick-morthy-interface';
import { RickMorthyService } from 'src/app/core/services/rickMorthy/rick-morthy.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  personajes: Characters[] = [];

  constructor(private rickMorthy: RickMorthyService) {

    this.rickMorthy.servicioPersonajes().subscribe( (data: RickMorthyResponse) => {
      console.log(data);
      this.personajes = data.results;
      console.log(this.personajes);
    })

  }

}
