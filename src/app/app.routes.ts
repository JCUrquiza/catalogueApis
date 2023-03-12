import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './utils/books/books.component';
import { DogsComponent } from './utils/dogs/dogs.component';
import { DragonBallComponent } from './utils/dragon-ball/dragon-ball.component';
import { HomeComponent } from './utils/home/home.component';
import { NasaComponent } from './utils/nasa/nasa.component';
import { PokemonDetailsComponent } from './utils/pokemon/pokemon-details/pokemon-details.component';
import { PokemonComponent } from './utils/pokemon/pokemons/pokemon.component';
import { RickMorthyComponent } from './utils/rick-morthy/options/rick-morthy.component';
import { StarWarsComponent } from './utils/star-wars/star-wars.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemons', component: PokemonComponent },
    { path: 'pokemon/:id', component: PokemonDetailsComponent },
    { path: 'rickMorthy', component: RickMorthyComponent },

    { path: 'starWars', component: StarWarsComponent },
    { path: 'dogs', component: DogsComponent },
    { path: 'books', component: BooksComponent },
    { path: 'dragonBall', component: DragonBallComponent },
    { path: 'nasa', component: NasaComponent },



    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});


