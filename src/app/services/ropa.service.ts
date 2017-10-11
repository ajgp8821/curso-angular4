import { Injectable } from '@angular/core';

// Decorador
@Injectable()
// Clase
export class RopaService{

    public nombrePrenda: string = 'Pantalones Vaqueros';

    prueba(nombrePrenda){
        return nombrePrenda;
    }
}