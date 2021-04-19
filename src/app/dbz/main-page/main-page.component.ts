import { Component, OnInit } from '@angular/core';

// Interfas para usar como un modelo
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  personajes: Personaje[] = [];

  nuevo: Personaje   = {
    nombre: 'Piccoro',
    poder: 1000
  };
    
  constructor(){}

}
