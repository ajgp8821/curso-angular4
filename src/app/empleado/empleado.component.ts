import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {

  public titulo = 'Componente Empleados';

  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajadorExterno:boolean;
  public color:string;
  public colorSeleccionado:string;

  constructor() {
    this.empleado = new Empleado('Alejandro Gil', 28, 'Líder', true);
    this.trabajadores = [
      new Empleado('Manolo Martínes', 32, 'Gerente', false),
      new Empleado('Ana López', 30, 'Analista', true),
      new Empleado('Carlos Pérez', 25, 'Desarrollador', false)
    ];

    this.trabajadorExterno = false;
    this.color = 'blue';
    this.colorSeleccionado = '#ccc';
  }

  ngOnInit() {
    // console.log(this.empleado);
  }

  cambiarExterno(valor){
    this.trabajadorExterno = valor;
  }

  logColorSeleccionado(){
    console.log(this.colorSeleccionado);
  }
}
