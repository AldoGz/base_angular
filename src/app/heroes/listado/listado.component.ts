import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroeRemove : string = "";
  heroes : string[] = [
    "Spiderman",
    "Ironman",
    "Hulk",
    "Thor"
  ];

  borrar(){
    this.heroeRemove = this.heroes.shift() || "";
    

  }

}
