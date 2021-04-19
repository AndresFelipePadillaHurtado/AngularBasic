import { Injectable } from '@angular/core';

// Interfces
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 1320
    }
  ];

  constructor() { 
    console.log('Servicio inicializado');
  }
}
