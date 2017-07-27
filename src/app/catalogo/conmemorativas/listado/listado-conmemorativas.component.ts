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
    monedas: Array<Moneda>;
    type: string;
    
    header: any;

    tableWidget: any;

    constructor(private router: Router, private zone: NgZone, private layoutService: LayoutService, private conmemorativasService: ConmemorativasService, public dialog: MdDialog, private route: ActivatedRoute) {}

    ngAfterViewInit() {
        this.initDatatable();
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: {monedas: Array<Moneda>, type: string}) => {
                this.monedas = data.monedas;
                this.type = data.type;
            });
            
        this.initCabecera();
    }
    
    initCabecera(): void {
        // CABECERA
        if (this.type === "type_pais") {
            this.header = this.monedas[0].pais.nombre;
            
        } else {
            this.header = this.monedas[0].ano;
        }
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
            order: [[2, 'desc']],
            columns: [
                {orderable: false, width: "15%"},
                {orderable: true, width: "5%"},
                {orderable: true, width: "15%"},
                {orderable: true, width: "10%"},
                {orderable: false, width: "40%"},
                {orderable: false, width: "15%"}
            ]
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
        dialog.afterClosed().subscribe((event: string) => {
            if (event === "save") {
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
                        this.monedas = listadoConmemorativasPais;

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
                        this.monedas = listadoConmemorativasAno;
                        
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
