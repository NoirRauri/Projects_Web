import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationCardService {
  constructor(private http: HttpClient) {}
  getLocation(url: string): Observable<any> {
    return this.http.get(url);
  }
}
