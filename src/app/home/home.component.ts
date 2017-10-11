import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo = "Página principal";

    constructor( // _servicio
        private _ropaService : RopaService // Se instancia, sin necesidad de new RopaService
    ){}

    ngOnInit(){
        console.log(this._ropaService.prueba('Camiseta Nike'));
    }
}

