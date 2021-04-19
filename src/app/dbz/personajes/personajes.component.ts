import { Component, Input } from '@angular/core';

// Interfaz
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent{

  /* Utilizado para recibir informacion del componente padre
   -importar de angular core 
   - dentro del parentesis se le puede poner 'unNombre', con
     el que externamente sea identificado
   */
  @Input() personajes: Personaje[] = [];

}
