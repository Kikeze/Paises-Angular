import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConsultarPorCapitalComponent } from 'src/app/pais/pages/consultar-por-capital/consultar-por-capital.component';
import { ConsultarPorPaisComponent } from 'src/app/pais/pages/consultar-por-pais/consultar-por-pais.component';
import { ConsultarPorRegionComponent } from 'src/app/pais/pages/consultar-por-region/consultar-por-region.component';
import { MostrarPaisComponent } from 'src/app/pais/pages/mostrar-pais/mostrar-pais.component';
import { MostrarOpcionesComponent } from './pages/mostrar-opciones/mostrar-opciones.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';


@NgModule({
    declarations: [
        ConsultarPorCapitalComponent,
        ConsultarPorPaisComponent,
        ConsultarPorRegionComponent,
        MostrarPaisComponent,
        MostrarOpcionesComponent,
        PaisTablaComponent,
        PaisInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        ConsultarPorCapitalComponent,
        ConsultarPorPaisComponent,
        ConsultarPorRegionComponent,
        MostrarPaisComponent,
        MostrarOpcionesComponent,
    ],
})
export class PaisModule { }
