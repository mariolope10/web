import {Component} from '@angular/core';
import {Moneda} from "app/models/moneda";

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
                <div class="box box-default table-box table-responsive mdl-shadow--2dp">
                    <table class="mdl-data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th class="mdl-data-table__cell--non-numeric">Pais</th>
                                <th class="mdl-data-table__cell--non-numeric">Imagen</th>
                                <th class="mdl-data-table__cell--non-numeric">Tirada</th>
                                <th class="mdl-data-table__cell--non-numeric">Fecha de emisión</th>
                                <th class="mdl-data-table__cell--non-numeric">Motivo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let moneda of dato.monedas">
                                <td>{{moneda.id}}</td>
                                <td class="mdl-data-table__cell--non-numeric">{{moneda.pais}}</td>
                                <td class="mdl-data-table__cell--non-numeric"><img src="{{moneda.imagen}}"/></td>
                                <td class="mdl-data-table__cell--non-numeric">{{moneda.tirada}}</td>
                                <td class="mdl-data-table__cell--non-numeric">{{moneda.fecha_emision}}</td>
                                <td class="mdl-data-table__cell--non-numeric">{{moneda.motivo}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </md-tab>
    </md-tab-group>
  `,
})
export class ConmemorativasAnoComponent {
    datos: Array<{ano: number, monedas: Moneda[]}>;
    
    constructor() {}
    
    ngOnInit(): void {
        this.getMonedas();
    }
    
    getMonedas(): void {
        /*this.heroService
            .getHeroes()
            .then(
            heroes => this.heroes = heroes,
            error => {
                this.router.navigate(['login']);
                console.error('An error occurred in heroes component, navigating to login: ', error);
            }
            );*/

        this.datos = [
            {
                "ano": 2004,
                "monedas": [
                    {
                        "id": 1,
                        "pais": "ES",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "12 septiembre 2008",
                        "motivo": "Mi motivo"
                    },
                    {
                        "id": 2,
                        "pais": "FR",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "02 Agosto 2004",
                        "motivo": "Mi motivo"
                    }
                ]
            },
            {
                "ano": 2004,
                "monedas": [
                    {
                        "id": 1,
                        "pais": "ES",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "12 septiembre 2008",
                        "motivo": "Mi motivo"
                    },
                    {
                        "id": 2,
                        "pais": "FR",
                        "imagen": "https://upload.wikimedia.org/wikipedia/de/9/94/2_euro_coin_Gr_serie_1a.png",
                        "tirada": 1000000,
                        "fecha_emision": "02 Agosto 2004",
                        "motivo": "Mi motivo"
                    }
                ]
            }
        ];
    }
}
