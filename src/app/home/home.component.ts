import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo = "Página principal";
    public listadoRopa: Array<string>;
    public prendaAGuardar:string;

    constructor( // _servicio
        private _ropaService : RopaService // Se instancia, sin necesidad de new RopaService
    ){}

    ngOnInit(){
        // Seteo a listadoRopa el valor de getRopa de ropa.service.ts
        this.listadoRopa = this._ropaService.getRopa();
        console.log(this._ropaService.prueba('Camiseta Nike'));
        console.log(this.listadoRopa);
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prendaAGuardar);
        this.prendaAGuardar = null; // deja vacio el campo luego de agregar
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
        // alert(index);
    }
}

