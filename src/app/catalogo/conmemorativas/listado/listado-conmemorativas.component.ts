import {Component, OnInit} from '@angular/core';
import {Moneda} from "app/models/moneda";

import {ActivatedRoute} from "@angular/router";
import {MdDialog} from "@angular/material";

import * as jQuery from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-fixedcolumns';
import 'easyzoom';
import {DialogoDetalleConmemorativasComponent} from "app/catalogo/conmemorativas/listado/dialogo/dialogo-detalle-conmemorativas.component";
import {DialogoColeccionComponent} from "app/catalogo/dialogo/dialogo-coleccion.component";

@Component({
    selector: 'listado-conmemorativas',
    styles: [`
        img {
            max-width: 145px;
            min-width: 75px;
            width: 100%;
            height: auto;
            cursor: pointer;
        }
        h2.article-title {
            padding-top: 30px;
        }
        table.dataTable td {
            white-space: nowrap;
        }
        .detalle-coleccion td, .detalle-coleccion th{
            box-sizing: border-box;
        }
        .iWishL {
            border-left: 10px solid #EF5350;
        }
        .iHaveL {
            border-left: 10px solid #66BB6A;
        }
        .iWishR {
            border-right: 10px solid #EF5350;
        }
        .iHaveR {
            border-right: 10px solid #66BB6A;
        }
        table.dataTable tfoot th {
            border-top: 1px solid #dddddd;
        }
        table.dataTable thead th {
            border-bottom: 1px solid #dddddd;
        }
        table.dataTable.dtr-inline.collapsed > tbody > tr > td:first-child:before, table.dataTable.dtr-inline.collapsed > tbody > tr > th:first-child:before {
            background-color: black;
        }
        table.dataTable.dtr-inline.collapsed > tbody > tr.parent > td:first-child:before, table.dataTable.dtr-inline.collapsed > tbody > tr.parent > th:first-child:before {
            background-color: #EF5350;
        }
        .material-icons {
            font-size: 21px;
        }
    `
    ],
    templateUrl: './listado-conmemorativas.component.html',
})
export class ListadoConmemorativasComponent implements OnInit {
    resultados: Array<{moneda: Moneda, enColeccion: boolean}>;

    constructor(public dialog: MdDialog, private route: ActivatedRoute) {}
    
    ngAfterViewInit() {
        // DATATABLES
        let tabla: any = jQuery('table');
        
        tabla.DataTable({
            autoWidth: false,
            paging: false,
            info: false,
            searching: false,
            responsive: true,
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

    ngOnInit(): void {
        this.route.data
            .subscribe((data: {listadoMonedas: Array<{moneda: Moneda, enColeccion: boolean}>}) => {
                this.resultados = data.listadoMonedas;
            });
    }
    
    openDialogoDetalle(moneda: Moneda) {
        let dialogRef = this.dialog.open(DialogoDetalleConmemorativasComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
    }
    
    openDialogoColeccion(moneda: Moneda) {
        let dialogRef = this.dialog.open(DialogoColeccionComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
        
        dialogRef.afterClosed().subscribe((result) => {
            location.reload();
        });
    }
}
