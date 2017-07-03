import {Component, OnInit} from '@angular/core';
import {Serie} from "app/models/serie";
import {DialogoDetalleComponent} from "app/catalogo/series/dialogo-detalle.component";
import {MdDialog} from "@angular/material";
import {MonedaSerie} from "app/models/moneda-serie";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'series',
    styleUrls: ['./series.component.css'],
    templateUrl: './series.component.html'
})

export class CatalogoSeriesComponent implements OnInit {
    datos: Array<{pais: string, series: Serie[]}>;

    constructor(public dialog: MdDialog, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data
            .subscribe((data: {listadoSeries: Array<{pais: string, series: Serie[]}>}) => {
                this.datos = data.listadoSeries;
            });
    }

    openDialogoDetalle(moneda: MonedaSerie, valor: string) {
        let dialogRef = this.dialog.open(DialogoDetalleComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
        instance.valor = valor;
    }
}
