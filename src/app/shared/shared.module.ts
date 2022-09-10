import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from 'src/app/shared/side-bar/side-bar.component';


@NgModule({
    declarations: [
        SideBarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        SideBarComponent,
    ],
})
export class SharedModule { }
