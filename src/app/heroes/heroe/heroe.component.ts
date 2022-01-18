import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl : './heroe.component.html',
})

export class HeroeComponent{
    nombre = "IROMAN";
    edad = 45;

    get capitalizado(){
        return this.nombre.toUpperCase();
    }

    obtener() : string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarHeroe():void{
        this.nombre = "spiderman";
    }

    cambiarEdad(){
        this.edad = 60;
    }

}