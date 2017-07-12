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

@Component({
    selector: 'listado-conmemorativas',
    styles: [`
        img {
            width: 145px;
            height: auto;
            cursor: pointer;
        }
        h2.article-title {
            padding-top: 30px;
        }
        table.dataTable td {
            white-space: nowrap;
        }
    `
    ],
    templateUrl: './listado-conmemorativas.component.html',
})
export class ListadoConmemorativasComponent implements OnInit {
    monedas: Moneda[];

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
            order: [[1, 'desc']],
            columns: [
                {orderable: false, width: "15%"},
                {orderable: true, width: "15%"},
                {orderable: false, width: "15%"},
                {orderable: false, width: "15%"},
                {orderable: false, width: "40%"}
            ]
        });
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: {listadoMonedas: Moneda[]}) => {
                this.monedas = data.listadoMonedas;
            });
    }
    
    openDialogoDetalle(moneda: Moneda) {
        let dialogRef = this.dialog.open(DialogoDetalleConmemorativasComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
    }
}
