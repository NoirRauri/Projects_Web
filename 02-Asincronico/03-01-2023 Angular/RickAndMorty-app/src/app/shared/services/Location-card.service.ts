import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationCardService {
  constructor(private http: HttpClient) {}
  getLocation(url?: string): Observable<any> {
    url == null ? 'https://rickandmortyapi.com/api/location' : url;
    return this.http.get('https://rickandmortyapi.com/api/location');
  }
}
