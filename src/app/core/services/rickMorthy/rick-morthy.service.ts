import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RickMorthyResponse } from '../../interfaces/rickMorthy/rick-morthy-interface';

@Injectable({
  providedIn: 'root'
})
export class RickMorthyService {

  constructor(  private http: HttpClient ) { }

  servicioPersonajes(): Observable<RickMorthyResponse> {
    return this.http
      .get<RickMorthyResponse>('https://rickandmortyapi.com/api/character');
  }

  servicioLocaciones() {
    this.http.get('https://rickandmortyapi.com/api/location').subscribe((res: any) => {
      console.log(res);
    })
  }

  servicioCapitulos() {
    this.http.get('https://rickandmortyapi.com/api/episode').subscribe((res: any) => {
      console.log(res);
    })
  }

}
