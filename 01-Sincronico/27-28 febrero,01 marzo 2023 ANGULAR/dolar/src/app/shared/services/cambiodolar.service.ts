import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CambioDolar } from '../Models/cambioDolar';

@Injectable({
  providedIn: 'root',
})
export class CambiodolarService {
  constructor(private http: HttpClient) {}

  getCambios(): Observable<CambioDolar> {
    return this.http.get<CambioDolar>(
      'https://api.hacienda.go.cr/indicadores/tc/dolar'
    );
  }
}
