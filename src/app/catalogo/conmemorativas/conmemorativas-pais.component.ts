import {Component, ViewChildren, OnInit} from '@angular/core';
import {Moneda} from "app/models/moneda";

import * as jQuery from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-fixedcolumns';
import 'easyzoom';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'conmemorativas-pais',
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
    template: `
    <md-tab-group>
        <md-tab *ngFor="let dato of datos" label="{{dato.pais}}">
            <section class="container-fluid">
                <div class="article-title">Monedas de 2 euros conmemorativas de {{dato.pais}}</div>
                <table #datatable class="tabla-monedas display" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Año</th>
                            <th>Día</th>
                            <th>Tirada</th>
                            <th>Motivo</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Imagen</th>
                            <th>Año</th>
                            <th>Día</th>
                            <th>Tirada</th>
                            <th>Motivo</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr *ngFor="let moneda of dato.monedas | orderBy : ['fecha_emision']">
                            <td>
                                <div #divimagen class="easyzoom easyzoom--overlay">
                                    <a href="http://pngimg.com/uploads/coin/coin_PNG3553.png">
                                        <img src="{{moneda.imagen}}"/>
                                    </a>
                                </div>
                            </td>
                            <td><strong>{{moneda.fecha_emision | date: 'yyyy'}}</strong></td>
                            <td>{{moneda.fecha_emision | date: 'dd MMMM'}}</td>
                            
                            <td>{{moneda.tirada}}</td>
                            <td>{{moneda.motivo}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </md-tab>
    </md-tab-group>
  `,
})

export class ConmemorativasPaisComponent implements OnInit {
    datos: Array<{pais: string, monedas: Moneda[]}>;

    dataTables: any;
    imagenesDataTables: any;

    constructor(private route: ActivatedRoute) {}

    @ViewChildren('datatable') datatables;
    @ViewChildren('divimagen') imagenes;

    ngAfterViewInit() {
        // ZOOM
        this.imagenesDataTables = jQuery(this.imagenes.toArray().map(x => x.nativeElement));
        this.imagenesDataTables.easyZoom({
            loadingNotice: 'Cargando imagen',
            errorNotice: 'Se ha producido un error al cargar la imagen'
        });

        // DATATABLES
        this.dataTables = jQuery(this.datatables.toArray().map(x => x.nativeElement));
        this.dataTables.DataTable({
            autoWidth: false,
            paging: false,
            info: false,
            searching: false,
            responsive: true,
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
        this.datos = this.route.snapshot.data['listadoMonedasPaises'];
    }
}
