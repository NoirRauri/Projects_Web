import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoModel } from '../models/empleadoModel';

@Injectable({
    providedIn: 'root',
})
export class EmpleadoCardService {

    constructor(private http: HttpClient) { }

    getEmpleados(url: string): Observable<any> {
        return this.http.get(url);
    }

    getEmpleadoById(id: any): Observable<EmpleadoModel> {
        return this.http.get<EmpleadoModel>(
            'http://localhost:3000/empleados/' + id
        );
    }

}