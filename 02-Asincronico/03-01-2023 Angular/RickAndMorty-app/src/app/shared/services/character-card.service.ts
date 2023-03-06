import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterCardService {
  constructor(private http: HttpClient) {}
  getPersonajes(url: string): Observable<any> {
    return this.http.get(url);
  }
}
