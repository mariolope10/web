import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

import * as jQuery from 'jquery';
import 'easyzoom';
import {Moneda} from "app/models/moneda";

@Component({
    selector: 'dialogo-detalle',
    templateUrl: './dialogo-detalle-series.component.html'
})
export class DialogoDetalleSeriesComponent implements AfterViewInit {
    moneda: Moneda;
    valor: string;

    easyZoomElement: any;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleSeriesComponent>, private elementRef: ElementRef) {}

    ngAfterViewInit() {
        this.easyZoomElement = jQuery(this.elementRef.nativeElement.querySelector('.easyzoom'));
        this.easyZoomElement.easyZoom({
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
