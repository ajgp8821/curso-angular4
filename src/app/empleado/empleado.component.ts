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

  constructor() {
    this.empleado = new Empleado('Alejandro Gil', 28, 'Líder', true);
    this.trabajadores = [
      new Empleado('Manolo Martínes', 32, 'Gerente', true),
      new Empleado('Ana López', 30, 'Analista', true),
      new Empleado('Carlos Pérez', 25, 'Desarrollador', false)
    ]
  }

  ngOnInit() {
    // console.log(this.empleado);
  }
}
