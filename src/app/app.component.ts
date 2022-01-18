import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Contador App';
  numero:number = 5;
  base:number = 5;

  acumulador(valor:number){
    this.numero += valor;
  }
}
