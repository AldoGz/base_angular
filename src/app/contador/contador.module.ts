import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


@NgModule({
    declarations:[
        ContadorComponent
        
    ],
    exports : [
        //Q SEA VISIBLE EN OTRO MODULOS//
        ContadorComponent
    ],
    imports : [
        //PARA EL USO DE ngFor, ngIf , ng-template
        CommonModule
    ],

})

export class ContadorModule {

}