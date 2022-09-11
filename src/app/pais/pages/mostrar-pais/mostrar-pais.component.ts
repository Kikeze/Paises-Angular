import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
    selector: 'app-mostrar-pais',
    templateUrl: 'mostrar-pais.component.html',
    styleUrls: ['mostrar-pais.component.css']
})
export class MostrarPaisComponent implements OnInit {
    pais!: Country;
    keys: string[] = [];

    constructor(
        private ActRoute: ActivatedRoute,
        private PaisSvc: PaisService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        this.ActRoute.params
            .pipe(
                switchMap((param) => this.PaisSvc.mostrarPais(param["id"])),
                tap(console.log)
            )
            .subscribe({
                next: (v) => {
                    this.pais = v[0];
                    this.keys = Object.keys(this.pais.translations);
                }
            });
    }

}
