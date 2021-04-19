import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent{
  nombre: string = "Ironman";
  edad: number = 45;

  /* Crear un GET o Set
    Crear una propiedad que va a hacer procesada
  */
    get nombreCapitalizdo(): string{
      return this.nombre.toUpperCase();
    }

 
  obteberNombre(): string  {
    return `${ this.nombre } - ${ this.edad}`
  }

  // Metodos
  cambiarNombre(): void{
    this.nombre ="Spiderman";
  }

  cambiarEdad(): void{
    this.edad = 30 ;
  }


}
