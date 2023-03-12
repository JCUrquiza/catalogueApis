import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  // src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
  // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
  // img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  // pokeApi.pokemon?limit=151'

  arrayPokemones: any[] = [];
  arraySkeleton: number[] = [];

  boolCardPokemonCarga: boolean = true;
  
  constructor( 
    private pokemonService: PokemonService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.llenadoArray();
    this.cargaPokemons();    
  }

  llenadoArray() {
    for (let index = 0; index < 30; index++) {
      this.arraySkeleton.push(index);
    }
  }

  cargaPokemons() {
    this.pokemonService.servicioTodosPokemones().subscribe( res => {
      this.boolCardPokemonCarga = false;
      for(const poke of res.results) {     
        if (poke.url) {
          const id = poke.url.split('/')[6];
          this.arrayPokemones.push({
            id: id,
            name: poke.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          });
        }
      }
    })
    
    
  }

  irADetallesPokemon(id: string) {
    this.router.navigate(['pokemon/', id]);
  }

}
