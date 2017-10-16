import { Injectable } from '@angular/core'; // Para permitir la inyección de dependecias y el decorador inyectable
import { Http, Response, Headers } from '@angular/http';
// Libreria para mapear las respuestas http
import 'rxjs/add/operator/map';
// Objeto observable para usar rxjs para las respuestas, mapearlas y trabajar con ellas
import { Observable } from 'rxjs/observable';

@Injectable()
export class PeticionesService{

    getPrueba(){
        return 'Hola mundo desde el servicio';
    }

}