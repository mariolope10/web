import {Component, ViewChildren, OnInit} from '@angular/core';
import {Moneda} from "app/models/moneda";

import * as jQuery from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-fixedcolumns';
import 'easyzoom';
import {ActivatedRoute} from "@angular/router";
import {ConmemorativasPaisService} from "app/catalogo/conmemorativas/conmemorativas.pais.service";

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

    constructor(private conmemorativasPaisService: ConmemorativasPaisService, private route: ActivatedRoute) {}

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

    getMonedas(): void {
        this.conmemorativasPaisService
            .getListadoMonedasPaises()
            .subscribe(
            datos => this.datos = datos,
            error => {
                console.error('An error occurred in heroes component, navigating to login: ', error);
            }
            );

        /*this.datos = [
            {
                "pais": "España",
                "monedas": [
                    {
                        "id": 1,
                        "pais": "ES",
                        "imagen": "http://img03.euro-muenzen.tv/Spain-2-Euro-Coin-Don-Quixote-2005-2730010-146373242475195.jpg",
                        "tirada": 1000000,
                        "fecha_emision": "06/06/2005",
                        "motivo": "Don Quijote de La Mancha"
                    },
                    {
                        "id": 2,
                        "pais": "ES",
                        "imagen": "http://img01.euro-muenzen.tv/Spain-2-Euro-Coin-Treaty-of-Rome-2007-2730050-145572899188997.gif",
                        "tirada": 5000000,
                        "fecha_emision": "09/02/2006",
                        "motivo": "Mi motivo"
                    },
                    {
                        "id": 3,
                        "pais": "ES",
                        "imagen": "http://img03.euro-muenzen.tv/Spain-2-Euro-Coin-10-Years-Euro-WWU-EMU-2009-2730080-146373248647878.jpg",
                        "tirada": 15000,
                        "fecha_emision": "11/12/2007",
                        "motivo": "10º aniversario del Euro"
                    }
                ]
            },
            {
                "pais": "Francia",
                "monedas": [
                    {
                        "id": 1,
                        "pais": "ES",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "06/06/2017",
                        "motivo": "Mi motivo"
                    },
                    {
                        "id": 2,
                        "pais": "FR",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "06/06/2017",
                        "motivo": "Mi motivo"
                    }
                ]
            },
            {
                "pais": "Andorra",
                "monedas": [
                    {
                        "id": 1,
                        "pais": "ES",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "06/06/2017",
                        "motivo": "Mi motivo"
                    },
                    {
                        "id": 2,
                        "pais": "FR",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "06/06/2017",
                        "motivo": "Mi motivo"
                    }
                ]
            }
        ];*/
    }
}
