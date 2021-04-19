import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

  // Listado de heroes
  heroes: string[] = [
    'Spderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'
  ];

  heroesBorrados: string[] = [];

  heroeBorrado: string = '';


  // Metodos

  borrarHeroe(): void{
    // shift -> elimina el primer elemeto de un arreglo y lo retorna
    this.heroesBorrados.unshift(this.heroes.shift());
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
