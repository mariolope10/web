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
    selector: 'conmemorativas-ano',
    styles: [`
    img {
        width: 150px;
        height: auto;
    }
    `
    ],
    template: `
    <md-tab-group>
        <md-tab *ngFor="let dato of datos" label="{{dato.ano}}">
            <section class="container-fluid">
                <div class="article-title">{{dato.ano}}</div>
                <table #datatable class="tabla-monedas display" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Pais</th>
                            <th>Tirada</th>
                            <th>Fecha de emisión</th>
                            <th>Motivo</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Imagen</th>
                            <th>Pais</th>
                            <th>Tirada</th>
                            <th>Fecha de emisión</th>
                            <th>Motivo</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr *ngFor="let moneda of dato.monedas">
                            <td>
                                <div #divimagen class="easyzoom easyzoom--overlay">
                                    <a href="http://pngimg.com/uploads/coin/coin_PNG3553.png">
                                        <img src="{{moneda.imagen}}"/>
                                    </a>
                                </div>
                            </td>
                            <td>{{moneda.pais.nombre}}</td>
                            <td>{{moneda.tirada}}</td>
                            <td>{{moneda.fecha_emision | date: 'dd MMMM'}}</td>
                            <td>{{moneda.motivo}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </md-tab>
    </md-tab-group>
  `,
})
export class ConmemorativasAnoComponent implements OnInit {
    datos: Array<{ano: number, monedas: Moneda[]}>;
    
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
        this.datos = this.route.snapshot.data['listadoMonedasAnos'];
    }
}
