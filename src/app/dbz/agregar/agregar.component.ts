import { Component, EventEmitter, Input, Output } from '@angular/core';

// Interfez
import { Personaje } from '../interfaces/dbz.interface';

// Servicio
import { DbzService } from '../services/dbz.service';

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
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // Inyectar el servicio de dbzService
  constructor( private dbzService: DbzService){

  }

  agregar() {

    if(this.nuevo.nombre.trim().length == 0){
      return;
    }

   // this.onNuevoPersonaje.emit(this.nuevo);

   this.dbzService.agregarPersonaje( this.nuevo );

    // Reiniciar el valor de nuevo
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
