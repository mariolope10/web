import {Component, OnInit} from '@angular/core';
import {Moneda} from "app/models/moneda";

import * as jQuery from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-fixedcolumns';
import 'easyzoom';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'detalle-conmemorativas-pais',
    styles: [`
        img {
            width: 145px;
            height: auto;
        }
        table.dataTable td {
            white-space: nowrap;
        }
    `
    ],
    templateUrl: './detalle-conmemorativas-pais.component.html',
})
export class DetalleConmemorativasPaisComponent implements OnInit {
    monedas: Moneda[];

    imagenesDataTables: any;

    constructor(private route: ActivatedRoute) {}

    //@ViewChildren('divimagen') imagenes;
    
    ngAfterViewInit() {
        // ZOOM
        /*this.imagenesDataTables = jQuery(this.imagenes.toArray().map(x => x.nativeElement));
        this.imagenesDataTables.easyZoom({
            loadingNotice: 'Cargando imagen',
            errorNotice: 'Se ha producido un error al cargar la imagen'
        });*/

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
            .subscribe((data: {listadoMonedasPaises: Moneda[]}) => {
                this.monedas = data.listadoMonedasPaises;
            });
    }
}
