import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../../interfaces/pokemon/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient ) { }
  
  servicioTodosPokemones(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=100');
  }

}
