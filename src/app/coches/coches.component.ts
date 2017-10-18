import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{

    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Cobalt", "120", "Negro"),
            new Coche("Renault Clio", "110", "Azul")
        ];
    }

    ngOnInit(){
        this._peticionesService.getArticulos().subscribe( // Suscribirse al observable y recoger el resultado o error
            // Capturamos el resultado
            result =>{
                // Le asignamos todo el arrego de objetos a articulos
                this.articulos = result;

                if(!this.articulos){
                    console.log("Error en es servidor");
                }
                // Validamos para saber si funciona
                //console.log(result);
            },
            // Capturamos el error
            error => {
                var errorMensaje = <any>error; // Se castea a tipo any
                console.log(errorMensaje);
            }
        );
        console.log(this._peticionesService.getPrueba());
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
        console.log(this.coche);
    }
}