import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-pais-input',
    templateUrl: 'pais-input.component.html',
    styleUrls: ['pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
    @Output() onBuscar: EventEmitter<string> = new EventEmitter<string>();
    @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

    debouncer: Subject<string> = new Subject<string>();

    termino: string = "";

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        this.debouncer
            .pipe(debounceTime(300))
            .subscribe({
                next: (v) => {
                    this.onDebounce.emit(v);
                }
            });
    }

    buscar() {
        this.onBuscar.emit(this.termino);
    }

    teclaPresionada() {
        this.debouncer.next(this.termino);
    }

}
