import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";
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
    templateUrl: './dialogo-detalle-series.component.html'
})
export class DialogoDetalleSeriesComponent {
    moneda: Moneda;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleSeriesComponent>) {}

    /*imgen: string;
    motivo: string;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
        this.imgen = this.data.imagen;
        this.motivo = this.data.motivo;
    }*/
}
