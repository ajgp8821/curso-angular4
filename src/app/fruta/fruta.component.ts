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

  public nombre: string;
  public edad: number;
  public mayorDeEdad: boolean;
  public trabajos: Array<any> = ['Carpintero', 44, 'Fontanero'];
  comodin: any;

  constructor() {
    this.nombre = 'Alejandro Gil';
    this.edad = 28;
    this.mayorDeEdad = true;
    this.comodin = 'SI';
    // console.log(this.trabajos);
  }

  ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad(3);
    // alert(this.nombre + ' ' + this.edad);

    // Variables y alcance
    var uno = 8;
    var dos = 15;
    
    if(uno === 8) {
      let uno = 3;
      var dos = 88;
      
      console.log('DENTRO DEL IF: ' + uno);
    }
    console.log('FUERA DEL IF: ' + uno);
  }

  cambiarNombre() {
    this.nombre = 'Violetha Gil';
  }

  cambiarEdad(edad) {
    this.edad = edad;
  }
}
