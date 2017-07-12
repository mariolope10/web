import {Component, AfterViewInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Moneda} from "app/models/moneda";

import * as jQuery from 'jquery';
import 'easyzoom';

@Component({
    selector: 'dialogo-detalle',
    styles: [`
        .img-zoom {
            max-width: 250px;
        }
    `
    ],
    templateUrl: './dialogo-detalle-series.component.html'
})
export class DialogoDetalleSeriesComponent implements AfterViewInit {
    moneda: Moneda;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleSeriesComponent>) {}

    ngAfterViewInit() {
        let easyZoomElement: any = jQuery('.easyzoom');
        
        easyZoomElement.easyZoom({
            loadingNotice: 'Cargando imagen',
            errorNotice: 'Se ha producido un error al cargar la imagen'
        });
    }

    /*imgen: string;
    motivo: string;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
        this.imgen = this.data.imagen;
        this.motivo = this.data.motivo;
    }*/
}
