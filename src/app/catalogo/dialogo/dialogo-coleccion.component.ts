import {Component, AfterViewInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

import {ConmemorativasService} from "app/catalogo/conmemorativas/conmemorativas.service";
import {UserMoneda} from "app/models/user-moneda";

@Component({
    selector: 'dialogo-detalle',
    styles: [`
    
    `
    ],
    templateUrl: './dialogo-coleccion.component.html'
})
export class DialogoColeccionComponent implements AfterViewInit {
    id: number;
    
    isDataAvailable: boolean = false;
    
    totalesMoneda: UserMoneda;
    
    constructor(private conmemorativasService: ConmemorativasService, public dialogRef: MdDialogRef<DialogoColeccionComponent>) {}

    ngAfterViewInit() {
        console.log(this.id)
    }
    
    ngOnInit() {
        this.conmemorativasService.getTotalesMonedaEnCatalogoByUser(this.id).then(
            totalesMoneda => {
                this.totalesMoneda = totalesMoneda
                
                this.isDataAvailable = true
            }
        );
    }
}
