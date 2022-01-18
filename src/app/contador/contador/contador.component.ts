import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `        
        <h1>{{title}}</h1>

        <button (click)="acumulador(base)" >+{{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumulador(-base)" >-{{base}}</button>

    `
})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 5;
    base: number = 5;

    acumulador(valor: number) {
        this.numero += valor;
    }
}

