import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Importacones de componentes
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Para hacer visibles los componentes en otro sector de la aplicacion // Visible en otro module
        ListadoComponent
    ],
    imports: [ // Por lo general solo van modulos Module
        CommonModule
    ]
})
export class HeroeModule{}