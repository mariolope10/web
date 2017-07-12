import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Moneda} from "app/models/moneda";

import * as jQuery from 'jquery';
import 'easyzoom';

@Component({
    selector: 'dialogo-detalle',
    templateUrl: './dialogo-detalle-conmemorativas.component.html'
})
export class DialogoDetalleConmemorativasComponent implements AfterViewInit {
    moneda: Moneda;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleConmemorativasComponent>, private elementRef: ElementRef) {}

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
