import { Component, Input, OnInit } from '@angular/core';

import { Country } from 'src/app/pais/interfaces/pais.interface';


@Component({
    selector: 'app-pais-tabla',
    templateUrl: 'pais-tabla.component.html',
    styleUrls: ['pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {
    @Input() paises: Country[] = [];

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}
