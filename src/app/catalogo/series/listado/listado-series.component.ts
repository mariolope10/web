import {Component, OnInit, NgZone} from '@angular/core';
import {Serie} from "app/models/serie";
import {MdDialog} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {Moneda} from "app/models/moneda";
import {DialogoDetalleSeriesComponent} from "app/catalogo/series/listado/dialogo/dialogo-detalle-series.component";

import * as jQuery from 'jquery';

import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-fixedcolumns';
import {DialogoColeccionComponent} from "app/catalogo/dialogo/dialogo-coleccion.component";
import {LayoutService} from "app/layout/layout.service";
import {SeriesService} from "app/catalogo/series/series.service";
import {DialogoTiradaComponent} from "app/catalogo/series/listado/dialogo/dialogo-tirada.component";

@Component({
    selector: 'series',
    styleUrls: ['./listado-series.component.css'],
    templateUrl: './listado-series.component.html'
})

export class ListadoSeriesComponent implements OnInit {
    series: Serie[];

    tableWidget: any;

    constructor(private router: Router, private zone: NgZone, private layoutService: LayoutService, public dialog: MdDialog, private route: ActivatedRoute, private seriesService: SeriesService) {}

    ngOnInit(): void {
        this.route.data
            .subscribe((data: {listadoSeries: Serie[]}) => {
                this.series = data.listadoSeries;
            });
    }

    ngAfterViewInit() {
        this.initDatatable();
    }

    initDatatable(): void {
        // DATATABLES
        let table: any = jQuery('table');

        this.tableWidget = table.DataTable({
            autoWidth: false,
            paging: false,
            info: false,
            searching: false,
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden ?
                                '<div data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                                '<div class="text-left"><strong>' + col.title + '</strong></div> ' +
                                '<div>' + col.data + '</div>' +
                                '</div>' :
                                '';
                        }).join('');

                        return data ? data : false;
                    }
                }
            },
            language: {
                url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
            },
            order: [[0, 'desc']],
            columnDefs: [
                {
                    targets: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                    className: 'mdl-data-table__cell--non-numeric'
                }
            ]
        });
    }
    
    reInitDatatable(): void {
        this.tableWidget.destroy();
        this.tableWidget = null;

        setTimeout(() => this.initDatatable(), 0);
    }

    openDialogoDetalle(moneda: Moneda) {
        let dialogRef = this.dialog.open(DialogoDetalleSeriesComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
    }
    
    openDialogoTirada(moneda: Moneda) {
        let dialogRef = this.dialog.open(DialogoTiradaComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
    }
    
    openDialogoColeccion(moneda: Moneda) {
        // DIALOGO DE DETALLES DE LA COLECCION DEL USUARIO
        let dialog = this.dialog.open(DialogoColeccionComponent);
        let instance = dialog.componentInstance;
        instance.moneda = moneda;

        // REFRESCAMOS AL CERRAR EL DIALOGO
        dialog.afterClosed().subscribe((event: string) => {
            if (event === "save") {
                this.getListadoSeriesByPais(moneda.pais.codigo)
            }
        });
    }
    
    getListadoSeriesByPais(codigo: string): void {
        this.layoutService.updatePreloaderState('active');

        this.seriesService.getListadoSeries(codigo).then(
            listadoSeriesPais => {
                this.layoutService.updatePreloaderState('hide');

                if (listadoSeriesPais.length > 0) {
                    this.zone.run(() => {
                        this.series = listadoSeriesPais;

                        this.reInitDatatable();
                    });

                } else {
                    // codigo no encontrado
                    this.router.navigate(['/extra/404']);
                }
            }
        );
    }
}
