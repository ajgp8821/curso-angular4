import { Injectable } from '@angular/core';

// Decorador
@Injectable()
// Clase
export class RopaService{

    public nombrePrenda: string = 'Pantalones Vaqueros';
    public coleccionRopa: Array<string> = ['Pantalones Blancos', 'Camiseta Roja']

    prueba(nombrePrenda){
        return nombrePrenda;
    }

    addRopa(nombrePrenda):Array<string>{
        this.coleccionRopa.push(nombrePrenda);
        return this.getRopa();
    }

    getRopa():Array<string>{
        return this.coleccionRopa;
    }

    deleteRopa(index:number){
        this.coleccionRopa.splice(index, 1);
        return this.getRopa();
    }
}