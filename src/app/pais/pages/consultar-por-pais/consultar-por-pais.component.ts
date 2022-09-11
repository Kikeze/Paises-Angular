import { Component, OnInit } from '@angular/core';

import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from 'src/app/pais/interfaces/pais.interface';


@Component({
    selector: 'app-consultar-por-pais',
    templateUrl: 'consultar-por-pais.component.html',
    styleUrls: ['consultar-por-pais.component.css']
})
export class ConsultarPorPaisComponent implements OnInit {
    termino: string = "";
    existeError: boolean = false;
    paises: Country[] = [];
    sugerido: string = "";
    sugeridos: Country[] = [];

    constructor(
        private PaisSvc: PaisService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    buscar(event: string) {
        this.existeError = false;
        this.termino = event;
        this.sugerido = "";
        this.sugeridos = [];

        if( !this.termino || this.termino.length <= 0) {
            return;
        }

        this.PaisSvc.buscarPais(this.termino)
            .subscribe({
                next: (v: Country[]) => {
                    this.paises = v;
                },
                error: (e) => {
                    this.existeError = true;
                    this.paises = [];
                    console.error(e);
                },
                complete: () => {
                    console.log('Consulta terminada')
                }
            });

    }

    sugerencias(event: string) {
        this.existeError = false;
        this.sugerido = event;
        this.sugeridos = [];

        if(!event || event.length <= 0) {
            return;
        }

        this.PaisSvc.buscarPais(event)
            .subscribe({
                next: (v) => {
                    this.sugeridos = v.splice(0,5);
                },
                error: (e) => {
                    this.sugeridos = [];
                    console.error(e);
                },
                complete: () => {
                    console.log("Consulta de sugerencias completa");
                }
            });
    }

}
