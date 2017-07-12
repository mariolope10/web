import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';

import {CatalogoComponent} from './catalogo.component';

import {CanActivateAuthGuard} from "app/can-activate.authguard";
import {Injectable} from "@angular/core";

import {SeriesService} from "app/catalogo/series/series.service";
import {Moneda} from "app/models/moneda";
import {ConmemorativasService} from "app/catalogo/conmemorativas/conmemorativas.service";
import {ListadoConmemorativasComponent} from "app/catalogo/conmemorativas/listado/listado-conmemorativas.component";
import {FiltroPaisSeriesComponent} from "app/catalogo/series/filtro-pais/filtro-pais-series.component";
import {ListadoSeriesComponent} from "app/catalogo/series/listado/listado-series.component";
import {FiltroPaisConmemorativasComponent} from "app/catalogo/conmemorativas/filtro-pais/filtro-pais-conmemorativas.component";
import {FiltroAnoConmemorativasComponent} from "app/catalogo/conmemorativas/filtro-ano/filtro-ano-conmemorativas.component";
import {Serie} from "app/models/serie";

// CARGA DE BASE DE DATOS - SERIES
@Injectable()
export class SeriesResolver implements Resolve<Serie[] | boolean> {
    constructor(private seriesService: SeriesService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Serie[]> | boolean {
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
export class ConmemorativasPaisResolver implements Resolve<Moneda[] | boolean> {
    constructor(private conmemorativasService: ConmemorativasService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Moneda[]> | boolean {
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
export class ConmemorativasAnosResolver implements Resolve<any> {
    constructor(private conmemorativasService: ConmemorativasService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<any> {
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
                            listadoMonedas: ConmemorativasPaisResolver
                        }
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
                            listadoMonedas: ConmemorativasAnosResolver
                        }
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
