import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from '../models/characterModel';

@Injectable({
  providedIn: 'root',
})
export class CharacterCardService {

  constructor(private http: HttpClient) { }

  getPersonajes(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPersonajeById(id: any): Observable<CharacterModel> {
    return this.http.get<CharacterModel>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
}
