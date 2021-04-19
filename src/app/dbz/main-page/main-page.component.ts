import { Component, OnInit } from '@angular/core';

// Interfas para usar como un modelo
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  personajes: Personaje[] = [];

  constructor(private _dbzService: DbzService){
    this.personajes = this._dbzService.personajes;
  }


  nuevo: Personaje   = {
    nombre: 'Piccoro',
    poder: 1000
  };

  agregarNuevoPersonaje( argumento:Personaje ){
  console.log(argumento);
  this.personajes.push(argumento)  
 } 

}
