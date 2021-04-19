import { NgModule } from "@angular/core";

// Importaciones del modulo
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[]
})
export class ContadorModule {}