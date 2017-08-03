import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Moneda} from "../../../../models/moneda";

@Component({
    selector: 'dialogo-tirada',
    styles: [``],
    templateUrl: './dialogo-tirada.component.html'
})
export class DialogoTiradaComponent {
    moneda: Moneda;

    constructor(public dialogRef: MdDialogRef<DialogoTiradaComponent>) {}

    /*imgen: string;
    motivo: string;

    constructor(public dialogRef: MdDialogRef<DialogoDetalleComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
        this.imgen = this.data.imagen;
        this.motivo = this.data.motivo;
    }*/
}
