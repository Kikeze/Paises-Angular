import { Component, OnInit } from '@angular/core';

import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from 'src/app/pais/interfaces/pais.interface';


@Component({
    selector: 'app-consultar-por-capital',
    templateUrl: 'consultar-por-capital.component.html',
    styleUrls: ['consultar-por-capital.component.css']
})
export class ConsultarPorCapitalComponent implements OnInit {
    termino: string = "";
    existeError: boolean = false;
    paises: Country[] = [];

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

        if( !this.termino || this.termino.length <= 0) {
            return;
        }

        this.PaisSvc.buscarCapital(this.termino)
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

}
