import { Component } from '@angular/core';

// Decorador
@Component({
  // Objeto Json
  selector: 'app-fruta',
  templateUrl: './fruta.component.html'
})

// Creamos la clase y sea usada en otro fichero
export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandias';

  public nombre = 'Alejandro';
  public edad = 28;
  public mayorDeEdad = true;
  public trabajos: Array<any> = ['Carpintero', 44, 'Fontanero'];
  comodin: any = 23;

}
