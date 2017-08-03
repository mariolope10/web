import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';

import {CatalogoComponent} from './catalogo.component';

import {Injectable} from "@angular/core";
import {Serie} from "../models/serie";
import {SeriesService} from "./series/series.service";
import {ConmemorativasService} from "./conmemorativas/conmemorativas.service";
import {Moneda} from "../models/moneda";
import {CanActivateAuthGuard} from "../can-activate.authguard";
import {FiltroPaisConmemorativasComponent} from "./conmemorativas/filtro-pais/filtro-pais-conmemorativas.component";
import {ListadoConmemorativasComponent} from "./conmemorativas/listado/listado-conmemorativas.component";
import {FiltroAnoConmemorativasComponent} from "./conmemorativas/filtro-ano/filtro-ano-conmemorativas.component";
import {FiltroPaisSeriesComponent} from "./series/filtro-pais/filtro-pais-series.component";
import {ListadoSeriesComponent} from "./series/listado/listado-series.component";

// CARGA DE BASE DE DATOS - SERIES
@Injectable()
export class SeriesResolver implements Resolve<Serie[] | boolean> {
    constructor(private seriesService: SeriesService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Serie[] | boolean> {
        return this.seriesService.getListadoSeries(route.params.codigo).then(
            listadoSeries => {
                if (listadoSeries.length > 0) {
                    return listadoSeries;

                } else {
                    // codigo no encontrado
                    this.router.navigate(['/extra/404']);
                    return false;
                }
            }
        );
    }
}

// CARGA DE BASE DE DATOS - CONMEMORATIVAS PAIS
@Injectable()
export class ConmemorativasPaisResolver implements Resolve<Array<Moneda> | boolean> {
    constructor(private conmemorativasService: ConmemorativasService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Moneda[] | boolean> {
        return this.conmemorativasService.getListadoMonedasPaises(route.params.codigo).then(
            listadoConmemorativasPais => {
                if (listadoConmemorativasPais.length > 0) {
                    return listadoConmemorativasPais;

                } else {
                    // codigo no encontrado
                    this.router.navigate(['/extra/404']);
                    return false;
                }
            }
        );
    }
}

// CARGA DE BASE DE DATOS - CONMEMORATIVAS ANOS
@Injectable()
export class ConmemorativasAnosResolver implements Resolve<Array<Moneda> | boolean> {
    constructor(private conmemorativasService: ConmemorativasService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Moneda[] | boolean> {
        return this.conmemorativasService.getListadoMonedasAnos(route.params.ano).then(
            listadoConmemorativasAnos => {
                if (listadoConmemorativasAnos.length > 0) {
                    return listadoConmemorativasAnos;

                } else {
                    // ano no encontrado
                    this.router.navigate(['/extra/404']);
                    return false;
                }
            }
        );
    }
}

export const CatalogoRoutes: Routes = [
    {
        path: '',
        component: CatalogoComponent,
        children: [
            {path: '', redirectTo: '/app/catalogo/conmemorativas/pais', pathMatch: 'full'},
            {
                path: 'conmemorativas',
                canActivate: [CanActivateAuthGuard],
                children: [
                    {path: '', redirectTo: '/app/catalogo/conmemorativas/pais', pathMatch: 'full'},
                    {
                        path: 'pais',
                        component: FiltroPaisConmemorativasComponent,
                        canActivate: [CanActivateAuthGuard],
                    },
                    {
                        path: 'pais/:codigo',
                        component: ListadoConmemorativasComponent,
                        canActivate: [CanActivateAuthGuard],
                        resolve: {
                            monedas: ConmemorativasPaisResolver
                        },
                        data: {type: 'type_pais'}
                    },
                    {
                        path: 'ano',
                        component: FiltroAnoConmemorativasComponent,
                        canActivate: [CanActivateAuthGuard]
                    },
                    {
                        path: 'ano/:ano',
                        component: ListadoConmemorativasComponent,
                        canActivate: [CanActivateAuthGuard],
                        resolve: {
                            monedas: ConmemorativasAnosResolver
                        },
                        data: {type: 'type_ano'}
                    }
                ]
            },
            {
                path: 'series',
                component: FiltroPaisSeriesComponent,
                canActivate: [CanActivateAuthGuard]
            },
            {
                path: 'series/:codigo',
                component: ListadoSeriesComponent,
                canActivate: [CanActivateAuthGuard],
                resolve: {
                    listadoSeries: SeriesResolver
                }
            }
        ]
    }
];

export const CatalogoRoutingModule = RouterModule.forChild(CatalogoRoutes);
