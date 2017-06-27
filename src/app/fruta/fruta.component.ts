import { Component } from '@angular/core';

//Decorador
@Component({
  //Objeto Json
  selector: 'fruta',
  templateUrl: './fruta.component.html'  
})

// Creamos la clase y sea usada en otro fichero
export class FrutaComponent{
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandias';
}