import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Página de contacto de la web";
    public parametro;

    constructor(
        private _route: ActivatedRoute, // Instancia el objeto y el servicio
        private _router: Router
    ){}

    ngOnInit(){
        // Recogemos el parametro de la Url
        this._route.params.forEach(
            // Se usa funcion de flecha para poder acceder a this.parametro
            (params: Params) => {
            this.parametro = params['page'];
            console.log(params);
        });
    }

    redirigir(){
        // ['/ruta', 'parametro']
        this._router.navigate(['/contacto', 'homelab.com']);
    }

    redirigirDos(){
        this._router.navigate(['/home']);
    }
}

