import {Component, OnInit, NgZone} from '@angular/core';
import {Moneda} from "app/models/moneda";

import {ActivatedRoute, Router} from "@angular/router";
import {MdDialog} from "@angular/material";

import * as jQuery from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-fixedcolumns';

import {DialogoDetalleConmemorativasComponent} from "app/catalogo/conmemorativas/listado/dialogo/dialogo-detalle-conmemorativas.component";
import {DialogoColeccionComponent} from "app/catalogo/dialogo/dialogo-coleccion.component";
import {ConmemorativasService} from "app/catalogo/conmemorativas/conmemorativas.service";
import {LayoutService} from "app/layout/layout.service";

@Component({
    selector: 'listado-conmemorativas',
    styleUrls: ['./listado-conmemorativas.component.css'],
    templateUrl: './listado-conmemorativas.component.html',
})

export class ListadoConmemorativasComponent implements OnInit {
    resultados: Array<{moneda: Moneda, enColeccion: boolean}>;
    type: string;

    tableWidget: any;

    constructor(private router: Router, private zone: NgZone, private layoutService: LayoutService, private conmemorativasService: ConmemorativasService, public dialog: MdDialog, private route: ActivatedRoute) {}

    ngAfterViewInit() {
        this.initDatatable();
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: {listadoMonedas: Array<{moneda: Moneda, enColeccion: boolean}>, type: string}) => {
                this.resultados = data.listadoMonedas;
                this.type = data.type;
            });
    }

    initDatatable(): void {
        // DATATABLES
        let table: any = jQuery('table');

        this.tableWidget = table.DataTable({
            autoWidth: false,
            paging: false,
            info: false,
            searching: false,
            responsive: true,
            processing: true,
            serverSide: false,
            language: {
                url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
            },
            ajax: {
                url: "http://localhost:9966/api/moneda/conmemorativa/pais/es",
                type: 'POST',
                beforeSend: function (request) {
                    request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('token'));
                }
            },
            order: [[2, 'desc']],
            columns: [
                {data: "moneda.tirada_bu", orderable: false, width: "15%"},
                {data: "moneda.tirada_bu", orderable: true, width: "5%"},
                {data: "moneda.tirada_bu", orderable: true, width: "15%"},
                {data: "moneda.tirada_bu", orderable: true, width: "10%"},
                {data: "moneda.tirada_bu", orderable: false, width: "40%"},
                {data: "moneda.tirada_bu", orderable: false, width: "15%"}
            ],
            columnDefs: [
                {
                    targets: [0],
                    orderable: false,
                    width: "15%",
                    render: function (data, type, row) {
                        return '<img (click)="openDialogoDetalle(' + row.moneda + ')" src="' + row.moneda.imagen + '" />';
                    }
                },
                {
                    targets: [1],
                    orderable: true,
                    width: "5%"
                },
                {
                    targets: [2],
                    orderable: true,
                    width: "15%"
                },
                {
                    targets: [3],
                    orderable: true,
                    width: "10%"
                },
                {
                    targets: [4],
                    orderable: false,
                    width: "40%"
                },
                {
                    targets: [5],
                    orderable: false,
                    width: "15%"
                },
                /*{
                    targets: [4],
                    orderable: false,
                    searchable: false,
                    render: function (data, type, row) {
                        if (row.area_categoria_count === 0) {
                            return '<div class="btn-group" role="group" aria-label="..."><button type="button" title="Editar" class="btn_editar btn btn-sm btn-primary"><span class="glyphicon glyphicon-pencil"></span></button><button type="button" title="Eliminar" class="btn_eliminar btn btn-sm btn-danger"><span class="glyphicon glyphicon-trash"></span></button></div>';

                        } else {
                            return '<div class="btn-group" role="group" aria-label="..."><button type="button" title="Editar" class="btn_editar btn btn-sm btn-primary"><span class="glyphicon glyphicon-pencil"></span></button><button type="button" disabled title="Eliminar" class="btn_eliminar btn btn-sm btn-danger"><span class="glyphicon glyphicon-trash"></span></button></div>';
                        }
                    }
                }*/
            ],
            initComplete: function (settings, json) {
                
            }
        });
    }

    reInitDatatable(): void {
        this.tableWidget.destroy();
        this.tableWidget = null;

        setTimeout(() => this.initDatatable(), 0);
    }

    openDialogoDetalle(moneda: Moneda) {
        // DIALOGO DE DETALLES DE LA MONEDA
        let dialogRef = this.dialog.open(DialogoDetalleConmemorativasComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
    }

    openDialogoColeccion(moneda: Moneda) {
        // DIALOGO DE DETALLES DE LA COLECCION DEL USUARIO
        let dialog = this.dialog.open(DialogoColeccionComponent);
        let instance = dialog.componentInstance;
        instance.moneda = moneda;

        // REFRESCAMOS AL CERRAR EL DIALOGO
        dialog.afterClosed().subscribe(result => {
            switch (this.type) {
                case 'type_pais': {
                    this.getListadoMonedasConmemorativasByPais(moneda.pais.codigo);
                    break;
                }
                case 'type_ano': {
                    this.getListadoMonedasConmemorativasByAno(moneda.ano)
                    break;
                }
            }
        });
    }

    getListadoMonedasConmemorativasByPais(codigo: string): void {
        this.layoutService.updatePreloaderState('active');

        this.conmemorativasService.getListadoMonedasPaises(codigo).then(
            listadoConmemorativasPais => {
                this.layoutService.updatePreloaderState('hide');

                if (listadoConmemorativasPais.length > 0) {
                    this.zone.run(() => {
                        this.resultados = listadoConmemorativasPais;

                        this.reInitDatatable();
                    });

                } else {
                    // codigo no encontrado
                    this.router.navigate(['/extra/404']);
                }
            }
        );
    }

    getListadoMonedasConmemorativasByAno(ano: number): void {
        this.layoutService.updatePreloaderState('active');

        this.conmemorativasService.getListadoMonedasAnos(ano).then(
            listadoConmemorativasAno => {
                this.layoutService.updatePreloaderState('hide');

                if (listadoConmemorativasAno.length > 0) {
                    this.zone.run(() => {
                        this.resultados = listadoConmemorativasAno;

                        this.reInitDatatable();
                    });

                } else {
                    // ano no encontrado
                    this.router.navigate(['/extra/404']);
                }
            }
        );
    }
}
