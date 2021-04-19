import { Component, EventEmitter, Input, Output } from '@angular/core';

// Interfez
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Emitir informacion del componente hijo al padre
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {

    if(this.nuevo.nombre.trim().length == 0){
      return;
    }

    this.onNuevoPersonaje.emit(this.nuevo);

    // Reiniciar el valor de nuevo
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
