import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationModule } from 'src/app/pages/location/location.module';

@Injectable({
  providedIn: 'root',
})
export class LocationCardService {

  constructor(private http: HttpClient) { }

  getLocation(url: string): Observable<any> {
    return this.http.get(url);
  }

  getLocationById(id: any): Observable<LocationModule> {
    return this.http.get<LocationModule>(
      'https://rickandmortyapi.com/api/location/' + id
    );
  }
}
