import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'conversor' // Nombre del pipe
})
export class ConversorPipe implements PipeTransform{

    // Método obligatorio de los pipes
    transform(value, por){
        let valueOne = parseInt(value);
        let valueTwo = parseInt(por);
        
        let result = "La multiplicacion: " + valueOne + " x " + valueTwo + " = " + (valueOne * valueTwo);

        return result;
    }
}