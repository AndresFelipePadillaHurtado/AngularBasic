import { Injectable } from '@angular/core';

// Interfces
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 1320
    }
  ];

  get personajes(): Personaje[] {
    // Los 3 puntos es el operador Spread
    // Separa cada uno de los elementos del arreglo y crea uno nuevo
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje(arg: Personaje) {
    this._personajes.push( arg );
  }
}
