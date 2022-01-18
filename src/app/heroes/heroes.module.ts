import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports : [
        //Q SEA VISIBLE EN OTRO MODULOS//
        ListadoComponent
    ],
    imports : [
        //PARA EL USO DE ngFor, ngIf , ng-template
        CommonModule
    ],

})

export class HeroesModule {

}