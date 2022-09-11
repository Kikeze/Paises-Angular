import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from 'src/app/pais/interfaces/pais.interface';


@Injectable({
    providedIn: 'root'
})
export class PaisService {
    private apiUrl: string = "https://restcountries.com/v3.1";

    constructor(
        private http: HttpClient
    ) {
        // Do nothing
    }

    buscarPais(termino: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${termino}`;
        return this.http.get<Country[]>(url);
    }

    buscarCapital(termino: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${termino}`;
        return this.http.get<Country[]>(url);
    }

    mostrarPais(codigo: string): Observable<Country[]> {
        const url = `${this.apiUrl}/alpha?codes=${codigo}`;
        return this.http.get<Country[]>(url);
    }

}
