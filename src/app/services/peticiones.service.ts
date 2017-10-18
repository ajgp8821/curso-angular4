import { Injectable } from '@angular/core'; // Para permitir la inyección de dependecias y el decorador inyectable
import { Http, Response, Headers } from '@angular/http';
// Libreria para mapear las respuestas http
import 'rxjs/add/operator/map';
// Objeto observable para usar rxjs para las respuestas, mapearlas y trabajar con ellas
import { Observable } from 'rxjs/observable';

@Injectable()
export class PeticionesService{

    public url:string;

    constructor(private _http:Http){
        this.url = "https://reqres.in/api/users?page=2"
        // this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return 'Hola mundo desde el servicio';
    }

    getArticulos(){
        // Hace la peticion http por get
        return this._http.get(this.url)
        // Capturar y recoger el metodo de la peticion
                .map(res => res.json()); // Lo convertimos en json y devuelve una colección de objetos usables en javascript
    }

}