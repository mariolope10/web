import {Component} from '@angular/core';
import {Serie} from "app/models/serie";
import {DialogoDetalleComponent} from "app/catalogo/series/dialogo-detalle.component";
import {MdDialog} from "@angular/material";
import {MonedaSerie} from "app/models/moneda-serie";

@Component({
    selector: 'series',
    styleUrls: ['./series.component.css'],
    templateUrl: './series.component.html'
})

export class CatalogoSeriesComponent {
    datos: Array<{pais: string, series: Serie[]}>;

    constructor(public dialog: MdDialog) {}

    ngOnInit(): void {
        this.getSeries();
    }

    openDialogoDetalle(moneda: MonedaSerie) {
        console.log(moneda)
        
        let dialogRef = this.dialog.open(DialogoDetalleComponent);
        let instance = dialogRef.componentInstance;
        instance.moneda = moneda;
        
        /*this.dialog.open(
            DialogoDetalleComponent,
            {
                data: {
                    motivo: motivo
                }
            }
        );*/
    }

    getSeries(): void {
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
                "pais": "España",
                "series": [
                    {
                        "id": 1,
                        "orden": 1,
                        "pais": "ES",
                        "fechaEmisionDesde": "2008",
                        "fechaEmisionHasta": "2014",
                        "moneda1c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-1-Cent-Coin-1999-2700030-146393556767868.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "1 céntimo",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2c": {
                            "id": 1,
                            "imagen": "http://img04.euro-muenzen.tv/Spain-2-Cent-Coin-1999-2700040-146393557896373.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "2 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda5c": {
                            "id": 1,
                            "imagen": "http://img02.euro-muenzen.tv/Spain-5-Cent-Coin-1999-2700050-146393558910264.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "5 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda10c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-10-Cent-Coin-1999-2700060-146393560050650.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "10 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda20c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-20-Cent-Coin-1999-2700070-146393561054337.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "20 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda50c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-50-Cent-Coin-1999-2700080-146393562053415.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "50 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda1e": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-1-Euro-Coin-1999-2700090-146393563182192.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "1 euro",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2e": {
                            "id": 1,
                            "imagen": "http://img03.euro-muenzen.tv/Spain-2-Euro-Coin-1999-2700100-146393564151500.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "2 euros",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "tiradas": [
                            {
                                "id": 1,
                                "ano": 2004,
                                "tirada1c": 1000000,
                                "tirada2c": 1000000,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 0,
                                "tirada1e": 1000000,
                                "tirada2e": 1000000
                            },
                            {
                                "id": 1,
                                "ano": 2005,
                                "tirada1c": 1000000,
                                "tirada2c": 0,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 0
                            },
                            {
                                "id": 1,
                                "ano": 2006,
                                "tirada1c": 1000000,
                                "tirada2c": 0,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 0
                            },
                            {
                                "id": 1,
                                "ano": 2007,
                                "tirada1c": 1000000,
                                "tirada2c": 0,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 0
                            },
                            {
                                "id": 1,
                                "ano": 2008,
                                "tirada1c": 1000000,
                                "tirada2c": 0,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 0
                            },
                            {
                                "id": 1,
                                "ano": 2009,
                                "tirada1c": 1000000,
                                "tirada2c": 0,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 0
                            },
                            {
                                "id": 1,
                                "ano": 2010,
                                "tirada1c": 1000000,
                                "tirada2c": 0,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 0
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "orden": 2,
                        "pais": "ES",
                        "fechaEmisionDesde": "2008",
                        "fechaEmisionHasta": "?",
                        "moneda1c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-1-Cent-Coin-1999-2700030-146393556767868.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "1 céntimo",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2c": {
                            "id": 1,
                            "imagen": "http://img04.euro-muenzen.tv/Spain-2-Cent-Coin-1999-2700040-146393557896373.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "2 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda5c": {
                            "id": 1,
                            "imagen": "http://img02.euro-muenzen.tv/Spain-5-Cent-Coin-1999-2700050-146393558910264.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "5 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda10c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-10-Cent-Coin-1999-2700060-146393560050650.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "10 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda20c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-20-Cent-Coin-1999-2700070-146393561054337.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "20 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda50c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-50-Cent-Coin-1999-2700080-146393562053415.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "50 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda1e": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-1-Euro-Coin-1999-2700090-146393563182192.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "1 euro",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2e": {
                            "id": 1,
                            "imagen": "http://img03.euro-muenzen.tv/Spain-2-Euro-Coin-1999-2700100-146393564151500.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "2 euros",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "tiradas": [
                            {
                                "id": 1,
                                "ano": 2004,
                                "tirada1c": 1000000,
                                "tirada2c": 1000000,
                                "tirada5c": 1000000,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 1000000
                            },
                            {
                                "id": 1,
                                "ano": 2005,
                                "tirada1c": 1000000,
                                "tirada2c": 1000000,
                                "tirada5c": 1000000,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 1000000
                            }
                        ]
                    }
                ]
            },
            {
                "pais": "Francia",
                "series": [
                    {
                        "id": 1,
                        "orden": 1,
                        "pais": "ES",
                        "fechaEmisionDesde": "2008",
                        "fechaEmisionHasta": "2014",
                        "moneda1c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-1-Cent-Coin-1999-2700030-146393556767868.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "1 céntimo",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2c": {
                            "id": 1,
                            "imagen": "http://img04.euro-muenzen.tv/Spain-2-Cent-Coin-1999-2700040-146393557896373.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "2 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda5c": {
                            "id": 1,
                            "imagen": "http://img02.euro-muenzen.tv/Spain-5-Cent-Coin-1999-2700050-146393558910264.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "5 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda10c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-10-Cent-Coin-1999-2700060-146393560050650.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "10 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda20c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-20-Cent-Coin-1999-2700070-146393561054337.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "20 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda50c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-50-Cent-Coin-1999-2700080-146393562053415.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "50 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda1e": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-1-Euro-Coin-1999-2700090-146393563182192.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "1 euro",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2e": {
                            "id": 1,
                            "imagen": "http://img03.euro-muenzen.tv/Spain-2-Euro-Coin-1999-2700100-146393564151500.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "2 euros",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "tiradas": [
                            {
                                "id": 1,
                                "ano": 2004,
                                "tirada1c": 1000000,
                                "tirada2c": 1000000,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 0,
                                "tirada1e": 1000000,
                                "tirada2e": 1000000
                            },
                            {
                                "id": 1,
                                "ano": 2005,
                                "tirada1c": 1000000,
                                "tirada2c": 0,
                                "tirada5c": 0,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 0
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "orden": 2,
                        "pais": "ES",
                        "fechaEmisionDesde": "2008",
                        "fechaEmisionHasta": "?",
                        "moneda1c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-1-Cent-Coin-1999-2700030-146393556767868.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "1 céntimo",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2c": {
                            "id": 1,
                            "imagen": "http://img04.euro-muenzen.tv/Spain-2-Cent-Coin-1999-2700040-146393557896373.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "2 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda5c": {
                            "id": 1,
                            "imagen": "http://img02.euro-muenzen.tv/Spain-5-Cent-Coin-1999-2700050-146393558910264.jpg",
                            "motivo": "Catedral de Santiago",
                            "valor": "5 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda10c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-10-Cent-Coin-1999-2700060-146393560050650.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "10 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda20c": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-20-Cent-Coin-1999-2700070-146393561054337.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "20 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda50c": {
                            "id": 1,
                            "imagen": "http://img05.euro-muenzen.tv/Spain-50-Cent-Coin-1999-2700080-146393562053415.jpg",
                            "motivo": "Efigie de Cervantes",
                            "valor": "50 céntimos",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda1e": {
                            "id": 1,
                            "imagen": "http://img01.euro-muenzen.tv/Spain-1-Euro-Coin-1999-2700090-146393563182192.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "1 euro",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "moneda2e": {
                            "id": 1,
                            "imagen": "http://img03.euro-muenzen.tv/Spain-2-Euro-Coin-1999-2700100-146393564151500.jpg",
                            "motivo": "Efigie del rey Juan Carlos I",
                            "valor": "2 euros",
                            "pais": "España",
                            "ceca": "Madrid"
                        },
                        "tiradas": [
                            {
                                "id": 1,
                                "ano": 2004,
                                "tirada1c": 1000000,
                                "tirada2c": 1000000,
                                "tirada5c": 1000000,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 1000000
                            },
                            {
                                "id": 1,
                                "ano": 2005,
                                "tirada1c": 1000000,
                                "tirada2c": 1000000,
                                "tirada5c": 1000000,
                                "tirada10c": 1000000,
                                "tirada20c": 1000000,
                                "tirada50c": 1000000,
                                "tirada1e": 1000000,
                                "tirada2e": 1000000
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
