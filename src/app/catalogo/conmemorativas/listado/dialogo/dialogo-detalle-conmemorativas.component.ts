import {Component, AfterViewInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

import * as jQuery from 'jquery';
import {Moneda} from "../../../../models/moneda";

@Component({
    selector: 'dialogo-detalle',
    styles: [`
        .img-zoom {
            max-width: 250px;
        }
        #div-img-zoom {
            margin-bottom: 20px;
        }
    `
    ],
    templateUrl: './dialogo-detalle-conmemorativas.component.html'
})
export class DialogoDetalleConmemorativasComponent implements AfterViewInit {
    moneda: Moneda;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleConmemorativasComponent>) {}

    ngAfterViewInit() {
        /*let easyZoomElement: any = jQuery('.easyzoom');
        
        easyZoomElement.easyZoom({
            loadingNotice: 'Cargando imagen',
            errorNotice: 'Se ha producido un error al cargar la imagen'
        });*/
    }

    /*imgen: string;
    motivo: string;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
        this.imgen = this.data.imagen;
        this.motivo = this.data.motivo;
    }*/
}
