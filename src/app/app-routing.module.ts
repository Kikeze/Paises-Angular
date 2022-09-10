import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultarPorPaisComponent } from 'src/app/pais/pages/consultar-por-pais/consultar-por-pais.component';
import { ConsultarPorCapitalComponent } from 'src/app/pais/pages/consultar-por-capital/consultar-por-capital.component';
import { ConsultarPorRegionComponent } from 'src/app/pais/pages/consultar-por-region/consultar-por-region.component';
import { MostrarPaisComponent } from 'src/app/pais/pages/mostrar-pais/mostrar-pais.component';
import { MostrarOpcionesComponent } from 'src/app/pais/pages/mostrar-opciones/mostrar-opciones.component';


const routes: Routes = [
    {
        path: "",
        component: MostrarOpcionesComponent,
        pathMatch: "full"
    },
    {
        path: "capital",
        component: ConsultarPorCapitalComponent
    },
    {
        path: "pais",
        component: ConsultarPorPaisComponent
    },
    {
        path: "region",
        component: ConsultarPorRegionComponent
    },
    {
        path: "pais/:id",
        component: MostrarPaisComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}
