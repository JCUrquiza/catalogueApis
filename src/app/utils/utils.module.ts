import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemons/pokemon.component';
import { RickMorthyComponent } from './rick-morthy/options/rick-morthy.component';
import { CharactersComponent } from './rick-morthy/characters/characters.component';
import { LocationsComponent } from './rick-morthy/locations/locations.component';
import { ChaptersComponent } from './rick-morthy/chapters/chapters.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { DogsComponent } from './dogs/dogs.component';
import { BooksComponent } from './books/books.component';
import { DragonBallComponent } from './dragon-ball/dragon-ball.component';
import { NasaComponent } from './nasa/nasa.component';

// Prime NG
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

const COMPONENTS = [
  HomeComponent, PokemonComponent, 
  RickMorthyComponent, CharactersComponent, 
  LocationsComponent, ChaptersComponent, 
  StarWarsComponent, DogsComponent, 
  BooksComponent, DragonBallComponent, 
  NasaComponent
];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [CommonModule, ButtonModule, DockModule, TableModule, CardModule, SkeletonModule]
})

export class UtilsModule { }



