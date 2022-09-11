import { Component, OnInit } from '@angular/core';

import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from 'src/app/pais/interfaces/pais.interface';


@Component({
    selector: 'app-consultar-por-region',
    templateUrl: 'consultar-por-region.component.html',
    styleUrls: ['consultar-por-region.component.css']
})
export class ConsultarPorRegionComponent implements OnInit {
    regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
    activa: string = "";
    existeError:boolean = false;
    paises: Country[] = [];

    constructor(
        private PaisSvc: PaisService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    claseBotonCSS(region: string): string {
        return (region === this.activa) ? "btn btn-primary" : "btn btn-outline-primary";
    }

    activarRegion(region: string) {
        if(region === this.activa) {
            return;
        }

        this.activa = region;
        this.existeError = false;

        this.PaisSvc.buscarRegion(this.activa)
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
