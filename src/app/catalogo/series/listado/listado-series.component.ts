import {Component, OnInit} from '@angular/core';
import {Serie} from "app/models/serie";
import {MdDialog} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Moneda} from "app/models/moneda";
import {DialogoDetalleSeriesComponent} from "app/catalogo/series/listado/dialogo/dialogo-detalle-series.component";

@Component({
    selector: 'series',
    styleUrls: ['./listado-series.component.css'],
    templateUrl: './listado-series.component.html'
})

export class ListadoSeriesComponent implements OnInit {
    series: Serie[];

    constructor(public dialog: MdDialog, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data
            .subscribe((data: {listadoSeries: Serie[]}) => {
                this.series = data.listadoSeries;
                console.log(data.listadoSeries)
            });
    }

    openDialogoDetalle(moneda: Moneda) {
        let dialogRef = this.dialog.open(DialogoDetalleSeriesComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
    }
}
